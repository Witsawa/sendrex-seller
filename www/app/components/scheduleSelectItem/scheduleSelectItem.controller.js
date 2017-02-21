import scheduleModalTemplate from './scheduleModalTemplate.html'
import schuedleEditModalTemplate from './scheduleEditModalTemplate.html'
class ScheduleSelectItemController {
  constructor($ionicModal,$scope,$ionicActionSheet) {
    this.name = 'scheduleSelectItem';
    this.modal = $ionicModal.fromTemplate(scheduleModalTemplate,{
      scope:$scope
    })
    this.editModal = $ionicModal.fromTemplate(schuedleEditModalTemplate,{
      scope:$scope
    })
    this._$ionicActionSheet = $ionicActionSheet
    console.log(this.ngModel)

  }
  openPicker(){
    this.schedules = angular.copy(this.ngModel)
    this.modal.show()
  }
  edit(schedule){

    if(!schedule) {
      schedule = {
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        from: new Date(1970, 0, 1, 8, 0),
        to: new Date(1970, 0, 1, 17, 0)
      }
      this.editModal.scope.editIndex = -1
    }else{
      this.editModal.scope.editIndex = this.schedules.indexOf(schedule)
    }

    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    days = days.map((day)=>{
      schedule.days = schedule.days || []
      return {name:day,checked:schedule.days.indexOf(day)!=-1}
    })
    this.editModal.scope.days = days
    this.editModal.scope.schedule = schedule
    this.editModal.show()
  }
  save(){

    this.ngModel = angular.copy(this.schedules)
    this.modal.hide()
  }
  saveSchedule(schedule){
    //push schedule to schedules
    let days = this.editModal.scope.days.reduce((result,day)=>{
      if(day.checked){
        result.push(day.name)
      }
      return result
    },[])
    schedule.days = days
    let index = this.editModal.scope.editIndex
    if(index == -1){
      this.schedules.push(schedule)
    }else{
      this.schedules[index] = schedule
    }

    this.editModal.hide()
  }
  showActions(schedule){
    //show edit or delete
    let self = this
    var hideSheet = self._$ionicActionSheet.show({
      buttons: [
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        if(index == 0){
        }
        return true;
      },
      destructiveButtonClicked:function(){
        let index = self.schedules.indexOf(schedule)
        self.schedules.splice(index,1)
        hideSheet()
      }
    });

  }
}

ScheduleSelectItemController.$inject = ["$ionicModal","$scope",'$ionicActionSheet']
export default ScheduleSelectItemController;
