import "./App.css";
import { Row, Col, Menu, Avatar } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { NavRoutes } from "./components/routes";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Home', 'sub1', <MailOutlined />),
  getItem('People', 'sub2', <AppstoreOutlined />),
  getItem('Posts', 'sub3', <SettingOutlined />),
  getItem('News feed', 'sub4', <SettingOutlined />),
  getItem('Settings', 'sub5', <SettingOutlined />),
  getItem('Logout', 'sub6', <SettingOutlined />),
];

function App() {
  return (
    <>
      <NavRoutes />
    </>
  );
}

export default App;
