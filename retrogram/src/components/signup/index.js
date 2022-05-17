import { Form, Input, Button, Checkbox, Typography } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import './index.css';
import { validateForm } from './validate';

const { Paragraph, Title, Text } = Typography;

export const Signup = () => {
    const [form] = Form.useForm();
    const { state: { newUser: {
        emailErr, usernameErr, passwordErr, confirmPasswordErr
    }, signupLoading, signUpErr }, dispatch } = useAuth();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        dispatch({ type: 'SIGNUP_SET_LOADING', payload: true });
        try {
            if (validateForm(dispatch, values)) {
                const { status, data: { encodedToken, createdUser } } = await axios.post('/api/auth/signup', values);
                if (status === 201 && encodedToken && createdUser) {
                    navigate('/login');
                } else {
                    throw new Error('Error occurred while signing up, Please try again');
                }
            }
        } catch (error) {
            dispatch({ type: 'SIGNUP_ERR', payload: error?.response?.data?.errors?.[0] || error?.message || error })
        }
        dispatch({ type: 'SIGNUP_SET_LOADING', payload: false });
    };

    return (
        <>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                className='flex flex_dcolumn align_center signup_form'
                scrollToFirstError
            >
                <Title className='text_center login_header' level={3}>Sign up</Title>
                <Form.Item
                    label="Email Id"
                    name="emailId"
                    rules={[
                        {
                            required: true,
                            message: emailErr || 'Please input your emailId!',
                        }, {
                            type: 'email', message: emailErr || 'The input is not valid E-mail!',
                        }
                    ]}
                    validateStatus={emailErr ? "error" : ""}
                >
                    <Input placeholder='abc@gmail.com' />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your user name!',
                            whitespace: false,
                        },
                    ]}
                    validateStatus={usernameErr ? "error" : ""}
                >
                    <Input placeholder='user name' />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        }
                    ]}
                    validateStatus={passwordErr ? "error" : ""}
                    hasFeedback
                >
                    <Input.Password placeholder='******' />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please input your confirm password!',
                        }, {
                            type: 'confirmPassword', warningOnly: confirmPasswordErr || true,
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                    validateStatus={confirmPasswordErr ? "error" : ""}
                >
                    <Input.Password placeholder='******' />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    className='login_checkbox'
                >
                    <Checkbox>Accept terms & conditions</Checkbox>
                </Form.Item>

                {signUpErr && <Text type='danger' className='error_text'>{signUpErr}</Text>}

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" loading={signupLoading}>
                        Submit
                    </Button>
                </Form.Item>
                <Paragraph className='no_account'>
                    Already have an account ? &nbsp;
                    <Link to="/login">
                        Login
                    </Link>
                </Paragraph>
            </Form>
        </>
    );
};