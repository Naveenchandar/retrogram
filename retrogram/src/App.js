import "./App.css";
import { Row, Col, Menu, Avatar } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Posts } from "./posts";
import { FriendsList } from "./friends";
import { Header } from "./header";
import { Login, Signup } from "./components";

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
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <>
      <Header />
      {/* <Row className="app_layout">
        <Col span={4} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 1 }}>
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
          />
        </Col>
        <Col span={16} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 2 }}>
          <section>
            <div style={{
              backgroundColor: 'white',
              width: '80%', gap: '1rem',
              marginTop: '2rem',
              marginBottom: '3rem',
              padding: '2rem 1rem',
              borderRadius: '0.7rem',
              border: '1px solid white'
            }} >
              <div className="flex" style={{ gap: '1rem' }}>
                <Avatar icon={<UserOutlined />} />
                <textarea
                  placeholder="write post here"
                  style={{
                    width: '100%',
                    backgroundColor: '#fafbfd',
                    border: 'transparent',
                    padding: '1rem',
                    height: '15rem'
                  }}
                ></textarea>
              </div>
              <div className="flex" style={{ justifyContent: 'flex-end' }}>
                <button className="btn btn_primary" style={{ height: '3rem', lineHeight: 0, backgroundColor: '#377dff' }}>Post</button>
              </div>
            </div>
            <Posts />
          </section>
        </Col>
        <Col span={4} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 3 }}>
          <section>
            <input type='search' />
            <FriendsList />
          </section>
        </Col>
      </Row> */}
      <Row flex align="center" className="align_center app_layout">
        <Login />
      </Row>
      <Row flex align="center" className="align_center app_layout">
        <Signup />
      </Row>
    </>
  );
}

export default App;
