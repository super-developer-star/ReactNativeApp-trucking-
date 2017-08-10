import React , { Component } from 'react';
import { StackNavigator } from 'react-navigation';


import PathSelection from './../../routes/pathSelection/pathSelection.js';
import Login from './../../routes/register/login.js';
import ChangePassword from './../../routes/register/changePassword.js';
import SignUp from './../../routes/register/signUp.js';
import SearchPickUp from './../../routes/pickUp/searchPickUp.js';
import PickUpResult from './../../routes/pickUp/pickupResult.js';
import SearchDropOff from './../../routes/pickUp/searchDropOff.js';
import PickUpDate from './../../routes/pickUp/pickUpDate.js';
import TrailerType from './../../routes/pickUp/trailerType.js';
import ForgotPassword from './../../routes/register/forgotPassword.js';
import NewPassword from './../../routes/register/newPassword.js';
import SignupPending from './../../routes/register/signupPending.js';
import PickUpLocation from './../../routes/PickUpLocation/PickUpLocation';
import DropOffLocation from './../../routes/DropOffLocation/DropOffLocation';
import Otp from './../../routes/register/otp.js';
import TripMessage from './../../routes/pickUp/tripMessage.js';
import TripDetails from './../../routes/pickUp/tripDetails.js';
import UserInfo from './../../routes/UserInfo/UserInfo.js';
import FullInfo from './../../routes/FullInfo/FullInfo.js';
import PickUpHome from './../../routes/pickUp/pickUpHome.js';
import DeliveryInProgress from './../../routes/trip/deliveryInProgress.js';
import TripComplete from './../../routes/trip/tripComplete.js';
import AcceptOrRejectTrip from './../../routes/trip/acceptOrRejectTrip.js';
import ContactUs from './../../routes/Tabs/ContactUs/ContactUs';
import Referrals from './../../routes/Tabs/Referrals/Referrals';
import Payments from './../../routes/Tabs/Payments/Payments';
import Shipments from './../../routes/Tabs/Shipments/Shipments';
import LoadCompleted from './../../routes/trip/loadCompleted.js';
import PasswordUpdateSuccessful from './../../routes/register/passwordUpdateSuccessful.js';
import PastShipment from './../../routes/PastShipment/PastShipment.js';
import DocScan from './../../routes/DocScan/DocScan.js';
import DocScanned from './../../routes/DocScanned/DocScanned.js';
import DocType from './../../routes/DocType/DocType.js';
import SetAppointment from './../../routes/trip/setAppointment.js';
import UpComingLoad from './../../routes/trip/upComingLoad.js';


  const routeConfiguration = {
    PathSelection: { screen: PathSelection },
    PickUpLocation: { screen: PickUpLocation },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ChangePassword: { screen: ChangePassword },
    SearchPickUp: { screen: SearchPickUp },
    SearchDropOff: { screen: SearchDropOff },
    PickUpDate: { screen: PickUpDate },
    PickUpResult: { screen: PickUpResult },
    TrailerType: { screen: TrailerType },
    ForgotPassword: { screen: ForgotPassword },
    NewPassword: { screen: NewPassword },
    SignupPending: { screen: SignupPending },
    DropOffLocation: { screen: DropOffLocation },
    Otp: { screen: Otp },
    TripMessage: { screen: TripMessage },
    TripDetails: { screen: TripDetails },
    UserInfo: { screen: UserInfo },
    FullInfo: { screen: FullInfo },
    PickUpHome: { screen: PickUpHome },
    DeliveryInProgress: { screen: DeliveryInProgress },
    TripComplete: { screen: TripComplete },
    AcceptOrRejectTrip: { screen: AcceptOrRejectTrip },
    Contact: { screen: ContactUs },
    Payments: { screen: Payments },
    Referrals: { screen: Referrals },
    Shipments: { screen: Shipments },
    LoadCompleted: { screen: LoadCompleted },
    PasswordUpdateSuccessful: { screen: PasswordUpdateSuccessful },
    PastShipment: { screen: PastShipment },
    DocScan: { screen: DocScan },
    DocScanned: { screen : DocScanned },
    DocType: { screen: DocType },
    SetAppointment: { screen: SetAppointment },
    UpComingLoad: { screen: UpComingLoad },
  }

// going to disable the header for now
  const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'PathSelection'
  }

  export const AppScreen = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
