import ProductList from './productList/productList'
import ItemSelectModal from './itemSelectModal/itemSelectModal'
import ProductForm from './productForm/productForm'
import ProductCategorySelectItem from './productCategorySelectItem/productCategorySelectItem'
import ProductVariantItem from './productVariantItem/productVariantItem'
import ProductOptionItem from './productOptionSelectItem/productOptionSelectItem'
import ValuePackForm from './valuePackForm/valuePackForm'
import ProductSelectItem from './productSelectItem/productSelectItem'
import PromotionForm from './promotionForm/promotionForm'
import ValuePackSelectItem from './valuePackSelectItem/valuePackSelectItem'
import DatePicker from './datePicker/datePicker'
import ShopForm from './shopForm/shopForm'
import DeliveryForm from './deliveryForm/deliveryForm'
import PaymentForm from './paymentForm/paymentForm'
import LocationPicker from './locationPicker/locationPicker'
import ScheduleSelectItem from './scheduleSelectItem/scheduleSelectItem'
import TimePicker from './timePicker/timePicker'
import shopDetailHeader from './shopDetailHeader/shopDetailHeader'
import MyProfileForm from './myProfileForm/myProfileForm'
import SocialMediaForm from './socialMediaForm/socialMediaForm'
import OrderList from './orderList/orderList'
import ImagePicker from './imagePicker/imagePicker'
import MultiImagePicker from './multiImagePicker/multiImagePicker'
import ScheduleForm from './scheduleForm/scheduleForm.js'
import DeliveryMethodForm from './deliveryMethodForm/deliveryMethodForm'
let componentModule = angular.module('app.components', [
  ProductList,
  ItemSelectModal,
  ProductForm,
  ProductCategorySelectItem,
  ProductVariantItem,
  ProductOptionItem,
  ValuePackForm,
  ProductSelectItem,
  PromotionForm,
  ValuePackSelectItem,
  DatePicker,
  ShopForm,
  DeliveryForm,
  PaymentForm,
  LocationPicker,
  ScheduleSelectItem,
  TimePicker,
  shopDetailHeader,
  MyProfileForm,
  SocialMediaForm,
  OrderList,
  ImagePicker,
  MultiImagePicker,
  ScheduleForm,
  DeliveryMethodForm
])

.name;

export default componentModule;
