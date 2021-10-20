import React from 'react'
import { Table } from 'antd'
import { NavLink } from 'react-router-dom'
import { Tabs } from 'antd'



export default function ReportPage() {
    const { TabPane } = Tabs
    const dataSource = [
        {
            key: '1',
            name: 'Nguyễn Văn An',
            chiendich: 'Tiếp tế lương thực cho TP.HCM',
            noidung: 'Hình ảnh đã cung cấp không rõ ràng',
            thoigian: '10:00 AM 17/10/2021',
            xemchitiet: <NavLink to="/chatitydetail">Xem chi tiết</NavLink>
        },
        {
            key: '2',
            name: 'Nguyễn Thị Thảo',
            chiendich: 'Tiếp tế lương thực cho TP.HCM',
            noidung: 'Thông tin chiến dịch không rõ ràng',
            thoigian: '5:00 PM 18/10/2021',
            xemchitiet: <NavLink to="/chatitydetail">Xem chi tiết</NavLink>
        },
    ]

    const columns = [
        {
            title: 'Người báo cáo',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Chiến dịch',
            dataIndex: 'chiendich',
            key: 'chiendich',
        },
        {
            title: 'Nội dung báo cáo',
            dataIndex: 'noidung',
            key: 'noidung',
        },
        {
            title: 'Thời gian báo cáo',
            dataIndex: 'thoigian',
            key: 'thoigian',
        },
        {
            title: 'Chi tiết',
            dataIndex: 'xemchitiet',
            key: 'xemchitiet',
        },
    ]
    const dataSource2 = [
        {
            key: '1',
            name: 'Nguyễn Văn An',
            chiendich: 'Từ thiện',
            noidung: 'Hình ảnh không phù hợp',
            thoigian: '10:00 AM 17/10/2021',
            
            xemchitiet: <span style={{color:'green'}}>Đã xử lí</span>,
            thoigianxuli: '8:30 AM 19/10/2021',
            hanhvi: 'Ngừng hoạt động',
        },
        // {
        //     key: '2',
        //     name: 'Nguyễn Thị Thảo',
        //     chiendich: 'Tiếp tế lương thực cho TP.HCM',
        //     noidung: 'Thông tin chiến dịch không rõ ràng',
        //     thoigian: '5:00 PM 18/10/2021',
        //     xemchitiet: <p style={{color:'green'}}>Đã xử lí</p>
        // },
    ]

    const columns2 = [
        {
            title: 'Người báo cáo',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Chiến dịch',
            dataIndex: 'chiendich',
            key: 'chiendich',
        },
        {
            title: 'Nội dung báo cáo',
            dataIndex: 'noidung',
            key: 'noidung',
        },
        {
            title: 'Thời gian báo cáo',
            dataIndex: 'thoigian',
            key: 'thoigian',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'xemchitiet',
            key: 'xemchitiet',
        },
        {
            title: 'Thời gian xử lí',
            dataIndex: 'thoigianxuli',
            key: 'thoigianxuli',
        },
        {
            title: 'Trạng thái hoạt động',
            dataIndex: 'hanhvi',
            key: 'hanhvi',
        },
    ]
    return (
        <div>

            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Xem báo cáo" key="1">
                    <Table dataSource={dataSource} columns={columns} />
                </TabPane>
                <TabPane tab="Lịch sử hoạt động" key="2">
                <Table dataSource={dataSource2} columns={columns2} />
                </TabPane>
            </Tabs>


        </div>
    )
}
