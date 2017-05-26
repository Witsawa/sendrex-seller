import Tabs from './tabs/tabs'
import Store from './store/store'
import Order from './order/order'
import Contact from './contact/contact'
import More from './more/more'
import Login from './login/login'
import Logout from './logout/logout'
import SelectShop from './selectShop/selectShop'
import Products from './products/products'
import ValuePacks from './valuepacks/valuepacks'
import Promotion from './promotions/promotions'
import newShop from './newShop/newShop'
import NewProduct from './newProduct/newProduct'
import EditProduct from './editProduct/editProduct'
import NewValuePack from './newValuePack/newValuePack'
import EditValuePack from './editValuePack/editValuePack'
import NewPromotion from './newPromotion/newPromotion'
import EditPromotion from './editPromotion/editPromotion'
import Register from './register/register'
import myProfile from './myProfile/myProfile'
import myShop from './myShop/myShop'
import socialMedia from './socialMedia/socialMedia'
import Payment from './payment/payment'
import Delivery from './delivery/delivery'
import Staff from './staff/staff'
import OrderDetail from './orderDetail/orderDetail'
import Layout from './layout/layout'
import Dashboard from './dashboard/dashboard'
import Balance from './balance/balance'
import ChatList from './chatList/chatList'
import Chat from './chat/chat'
import SelectShopMore from './selectShopMore/selectShopMore'
import OperationTime from './operationTime/operationTime'
import Publish from './publish/publish'
import Billing from './billing/billing'
let pageModule = angular.module('app.pages', [
    Tabs,
    Store,
    Order,
    Contact,
    More,
    Products,
    ValuePacks,
    Promotion,
    NewProduct,
    Login,
  Logout,
    SelectShop,
  newShop,
  EditProduct,
  NewValuePack,
  EditValuePack,
  NewPromotion,
  EditPromotion,
  Register,
  myProfile,
  myShop,
  socialMedia,
  Payment,
  Delivery,
  Staff,
  OrderDetail,
  Layout,
  Dashboard,
  Balance,
  ChatList,
  Chat,
  SelectShopMore,
  OperationTime,
  Publish,
  Billing
])

.name;

export default pageModule;
