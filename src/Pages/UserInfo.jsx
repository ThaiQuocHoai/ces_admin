import React, { useState } from 'react'
import { Form, Input, Button, Radio, DatePicker, Tabs } from 'antd'

export default function UserInfo() {
    const { TabPane } = Tabs

    function callback(key) {
        console.log(key)
    }


    return (
        <div className="container">
            <div className="mt-3">
                <div>
                    <h3 className="mb-1">Hồ Sơ Của Tôi</h3>
                    <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                </div>
                <hr />
                <div>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Thông tin" key="1">
                            <Form
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 14 }}
                                layout="horizontal"
                            >
                                <Form.Item name="note" label="Số điện thoại">
                                    <Input disabled defaultValue={'099999999'} />
                                </Form.Item>
                                <Form.Item name="note" label="Họ và tên" rules={[{ required: true }]}>
                                    <Input defaultValue={'Lê Duy Tuấn Vũ'} />
                                </Form.Item>
                                <Form.Item name="note" label="Email" rules={[{ required: true }]}>
                                    <Input defaultValue={'vuldt@gmail.com'} />
                                </Form.Item>
                                <Form.Item name="note" label="Giới tính" rules={[{ required: true }]}>
                                    <Radio.Group defaultValue={1} name="sex">
                                        <Radio value={1}>Nam</Radio>
                                        <Radio value={2}>Nữ</Radio>
                                        <Radio value={3}>Khác</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item name="note" label="Ngày sinh" rules={[{ required: true }]}>
                                    <DatePicker format="DD/MM/YYYY" />
                                </Form.Item>
                                <Form.Item label="tác vụ">
                                    <Button type="primary">Lưu</Button>
                                </Form.Item>
                            </Form>
                        </TabPane>
                        <TabPane tab="Đổi mật khẩu" key="2">
                            <Form
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 14 }}
                                layout="horizontal"
                            >
                                <Form.Item name="note" label="Mật khẩu cũ" rules={[{ required: true }]}>
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item name="note" label="Mật khẩu mới" rules={[{ required: true }]}>
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item name="note" label="Xác nhận mật khẩu" rules={[{ required: true }]}>
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item label="tác vụ">
                                    <Button type="primary">Cập nhật</Button>
                                </Form.Item>
                            </Form>
                        </TabPane>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}
