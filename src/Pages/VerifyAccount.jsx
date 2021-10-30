import React from 'react'
import { Breadcrumb, Table } from 'antd'

import { Tabs } from 'antd'
import { NavLink } from 'react-router-dom'

export default function VerifyAccount() {
    // const { TabPane } = Tabs
    const dataSource = [
        {
            key: '1',
            name: 'Lê Hoàng Sơn',
            thoigian: '10:00 AM 19/10/2021',
            trangthai: <span style={{ color: 'orange' }}>Chờ xác nhận</span>,

            chitiet: <NavLink to="/verifydetail">Xem chi tiết</NavLink>

        },
        {
            key: '2',
            name: 'Trần Thanh Dương',
            thoigian: '01:15 PM 17/10/2021',
            trangthai: <span style={{ color: 'orange' }}>Chờ xác nhận</span>,
            chitiet: <NavLink to="/verifydetail">Xem chi tiết</NavLink>
        },
        {
            key: '3',
            name: 'Đỗ Văn Tâm',
            thoigian: '03:20 PM 15/10/2021',
            trangthai: <span style={{ color: 'green' }}>Đã xác nhận</span>,
            chitiet: <NavLink to="/verifydetail">Xem chi tiết</NavLink>
        },
    ]

    const columns = [
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Thời gian',
            dataIndex: 'thoigian',
            key: 'thoigian',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'trangthai',
            key: 'trangthai',
        },
        {
            title: 'Chi tiết',
            dataIndex: 'chitiet',
            key: 'chitiet',
        },
    ]
    return (
        <div>
            {/* <h3 className="p-2">Xác thực tài khoản</h3> */}
            <Breadcrumb className="p-2">
                <Breadcrumb.Item>
                    <a href="/verify">Xác thực tài khoản</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}
