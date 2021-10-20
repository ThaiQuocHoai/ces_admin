import React, { useState } from "react";
import { Form, Input, Button, Radio, DatePicker, Tabs } from "antd";
import "../assets/css/userinfo.css";

export default function UserInfo() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
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
                  <Input disabled defaultValue="099999999" />
                </Form.Item>
                <Form.Item
                  name="name"
                  label="Họ và tên"
                  rules={[
                    { required: true, message: "Vui lòng nhập họ và tên" },
                  ]}
                >
                  <Input defaultValue="Lê Duy Tuấn Vũ" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: "Vui lòng nhập email" }]}
                >
                  <Input defaultValue="vuldt@gmail.com" />
                </Form.Item>
                <div
                  style={{
                    marginLeft: 113,
                  }}
                  className="form-group"
                >
                  <span>
                    <span style={{ color: "red" }}>* </span>Giới tính:{" "}
                  </span>
                    <input className="mx-2" type="radio" name="gender" checked />
                    <label>Nam</label>
                    <input className="mx-2" type="radio" name="gender" />
                    <label>Nữ</label>
                </div>
                <div className="form-group" style={{
                    marginLeft: 113,
                  }}>
                  <span>
                    <span style={{ color: "red" }}>* </span> Ngày sinh:{" "}
                  </span>
                  <input type="date" value="2000-01-01" />
                </div>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Cập nhật
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="Đổi mật khẩu" key="2">
              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
              >
                <Form.Item
                  name="oldpassword"
                  label="Mật khẩu cũ"
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu cũ" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="newpassword"
                  label="Mật khẩu mới"
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu mới" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="confirmpassword"
                  label="Xác nhận mật khẩu"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập xác nhận mật khẩu mới",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Cập nhật
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
