class DatePickerController {
  constructor($scope) {
    this.name = 'datePicker';
    let self = this


    /*$scope.$watch(()=>{
      return self.ngModel
    },(date)=>{
      if(typeof(date) == "string"){

        date = new Date(date)//this will automatically convert utc to local
        //create new utc date with local timezone
        date = new Date(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),0,0,0)
        self.ngModel = date
        console.log(date.toString())
      }else if(typeof(date) == "object"){
        console.log(typeof(date))
      }
    })*/

  }
}

DatePickerController.$inject = ["$scope"]
export default DatePickerController;
