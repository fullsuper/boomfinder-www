import { combineReducers } from 'redux';
import SettingReducer from './Settings';
import ChatDataReducer from './Chat';
import ContactReducer from './Contact';
import MailReducer from './Mail';
import ToDoReducer from './ToDo';
import AuthReducer from './Auth';

export default combineReducers({
  settings: SettingReducer,
  chatData: ChatDataReducer,
  contacts: ContactReducer,
  mail: MailReducer,
  toDo: ToDoReducer,
  auth: AuthReducer,
});
