import { Form, Input, Button, Radio, DatePicker, Breadcrumb, Table, Modal, Select } from 'antd'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    UndoOutlined,
    ToolOutlined
} from '@ant-design/icons'
import { history } from '../App'

export default function UpdateStatus() {

    const [isModalVisibleWarning, setIsModalVisibleWarning] = useState(false)

    const showModalWarning = () => {
        setIsModalVisibleWarning(true)
    }

    const handleOkWarning = () => {
        setIsModalVisibleWarning(false)
    }

    const handleCancelWarning = () => {
        setIsModalVisibleWarning(false)
    }

    const dataSource = [
        {
            key: '1',
            name: 'Lê Hoàng Sơn',
            email: 'sonlehoang@gmail.com',
            sdt: '0913456852',
            trangthai: 'Đang hoạt động',
            motaikhoan: <button onClick={() => {
                showModalWarning();
            }} className="btn btn-primary d-flex justify-content-center align-items-center"><ToolOutlined /></button>,
        },

    ]

    const columns = [
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'sdt',
            key: 'sdt',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'trangthai',
            key: 'trangthai',
        },
        {
            title: 'Chỉnh sửa',
            dataIndex: 'motaikhoan',
            key: 'motaikhoan',
        },
    ]


    return (
        <div>
            <Breadcrumb className="p-2">
                <Breadcrumb.Item>
                    <a href="/update">Danh sách tài khoản</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Table dataSource={dataSource} columns={columns} />
            <Modal title="Cảnh báo" cancelText="Huỷ" okText="Xác nhận" visible={isModalVisibleWarning} onCancel={handleCancelWarning} onOk={() => {
                handleOkWarning()
                window.confirm('Bạn muốn từ chối đuyệt người dùng này?')
                history.push('/verify')
            }}>
                <div className="form-group">
                    <p>Số điện thoại <span style={{color: 'red'}}>*</span></p>
                    <input disabled type="text" value="0999777888" className='form-control' />
                </div>
                <div className="form-group">
                    <p>Họ và tên <span style={{color: 'red'}}>*</span></p>
                    <input type="text" value="Lê Hoàng Sơn" className='form-control' />
                </div>
                <div className="form-group">
                    <p>Email <span style={{color: 'red'}}>*</span></p>
                    <input type="text" value="sonlehoang@gmail.com" className='form-control' />
                </div>
                
                <div className="form-group">
                    <p>Giới tính <span style={{color: 'red'}}>*</span></p>
                    
                </div>
                <div className="form-group">
                    <p>Số điện thoại <span style={{color: 'red'}}>*</span></p>
                    <input type="text" className='form-control' />
                </div>




            </Modal>
        </div>
    )
}
