import { Form, Input, Button, Checkbox } from 'antd';
import './index.css';

export const Signup = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{
                    backgroundColor: 'white',
                    padding: '7rem',
                    width: '30%'
                }}
                className='flex flex_dcolumn align_center signup_form'
            >
                <h3 className='text_center' style={{ fontWeight: 'bold' }}>Sign up</h3>
                <Form.Item
                    label="Email Id"
                    name="emailId"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your emailId!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="First name"
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last name"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your confirm password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    style={{
                        // marginLeft: '15%',
                        minWidth: '100%',
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <p className='no_account' style={{ alignSelf: 'center' }}>Already have an account ? <span>Login</span></p>
            </Form>
        </>
    );
};