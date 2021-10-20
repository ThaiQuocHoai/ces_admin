import React, { useState } from 'react'
import { Form, Input, Button, Radio, DatePicker, Tabs, Breadcrumb, Modal, Menu, Dropdown } from 'antd'
import TextArea from 'rc-textarea'
import { DownOutlined } from '@ant-design/icons'
import {history} from '../App'

export default function VerifyDetail() {

    const [isModalVisibleWarning, setIsModalVisibleWarning] = useState(false)
    const [reason, setReason] = useState("")

    const showModalWarning = () => {
        setIsModalVisibleWarning(true)
    }

    const handleOkWarning = () => {
        setIsModalVisibleWarning(false)
    }

    const handleCancelWarning = () => {
        setIsModalVisibleWarning(false)
    }


    return (
        <div>
            <Breadcrumb className="p-2">
                <Breadcrumb.Item>
                    <a href="/verify">Xác thực tài khoản</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/verify">Chi tiết tài khoản</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                labelAlign="left"
            >
                <div className="row">
                    <div className="col-6 pt-5 pl-5">
                        {/* <p>Thông tin</p> */}
                        <Form.Item name="note" label="Họ và tên">
                            <span>Lê Hoàng Sơn</span>
                        </Form.Item>
                        <Form.Item name="note" label="Số điện thoại">
                            <span>099999999</span>
                        </Form.Item>
                        <Form.Item name="note" label="Email">
                            <span>sonlehoang@gmail.com</span>
                        </Form.Item>
                        <Form.Item name="note" label="Giới tính">
                            <span>Nam</span>
                        </Form.Item>
                        <Form.Item name="note" label="Ngày sinh">
                            <span>03/03/2000</span>
                        </Form.Item>
                    </div>
                    <div className="col-6">
                        <p>Chứng minh nhân dân/ Căn cước công dân:</p>
                        <img width="300" src="https://s3.cloud.cmctelecom.vn/tinhte1/2015/01/2774618_CMND_mat_truoc.jpg" alt="" />
                        <br />
                        <img width="300" src="https://cs.vtcmobile.vn/hc/article_attachments/115009287188/CMNDsau.jpg" alt="" />
                    </div>

                    <div className="ml-5">
                        <button onClick={() => {
                            showModalWarning()
                        }} className="btn btn-danger mr-2">Từ chối</button>
                        <button onClick={() => {
                          const result = window.confirm('Bạn muốn duyệt người dùng này')
                          if(result){
                              history.push('/verify')
                          }
                        }} className="btn btn-success">Duyệt</button>
                    </div>
                    <Modal title="Cảnh báo" cancelText="Huỷ" okText="Xác nhận" visible={isModalVisibleWarning} onCancel={handleCancelWarning} onOk={() => {
                      handleOkWarning()
                      window.confirm('Bạn muốn từ chối đuyệt người dùng này?')
                      history.push('/verify')
                    }}>
                        <p>Nhập lí do <span style={{ color: 'red' }}>*</span></p>
                        <div className="text-center">
                            <select onChange={(event) => {
                                setReason(event.target.value)
                            }}>
                                <option value="1">Chọn lí do</option>
                                <option value="2">CMND/CCCD chụp không rõ ràng</option>
                                <option value="3">Thông tin không trùng khớp với CMND/CCCD</option>
                                <option value="khac">Khác</option>
                            </select>
                        </div>
                        <br />
                        
                        {reason === 'khac' ? 
                        <div>
                            <p>Nhập lí do khác: <span style={{ color: 'red' }}>*</span></p>

                        <div className="text-center"> 
                            <textarea style={{width: 300, height: 80}}></textarea>
                        </div>
                        </div>: ''}

                            
                    </Modal>
                </div>
            </Form>
        </div>
    )
}
