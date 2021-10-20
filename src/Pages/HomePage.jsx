import React, { useState } from 'react'
import { Breadcrumb, Card, Progress, Modal, Button, Input } from 'antd'
import {  WarningOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

export default function HomePage() {


    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = () => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }
    const { TextArea } = Input

    return (
        <div className="container">
            <div className="bg-white p-2">
                <Breadcrumb style={{ margin: '0' }}>
                    <Breadcrumb.Item>
                        <NavLink to="/home">Trang chủ</NavLink>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="mt-4">
                <h2>Các chiến dịch đã tài trợ</h2>
                <div className="mb-4">
                    <Card title="Tiếp tế lương thực cho TP.HCM" extra={<div className="ml-3">
                        {/* <div style={{ cursor: 'pointer' }} onClick={showModal}>
                            <WarningOutlined />
                        </div>

                        <Modal title="Báo cáo chiến dịch" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <h5>Lý do báo cáo</h5>
                            <TextArea rows={4} />
                        </Modal> */}
                    </div>} >
                        <div className="row">
                            <div className="col-9">
                                <p className="mt-3 mb-3 row"><span className="col-6">Quỹ từ thiện: </span><span className="col-6">350,000,000 VNĐ</span></p>
                                <hr />
                                <p className="mt-3 mb-3 row"><span className="col-6">Người phụ trách chiến dịch: </span><span className="col-6">Lê Duy Tuấn Vũ</span></p>
                                <hr />
                                <p className="mt-3 mb-3 row"><span className="col-6">Ngày bắt đầu chiến dịch: 18/09/2021</span><span className="col-6">Ngày dự kiến hoàn thành: 10/10/2021</span></p>
                            </div>
                            <div className="col-3">
                                <div className="text-center mb-2">
                                    <Progress
                                        type="circle"
                                        strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#87d068',
                                        }}
                                        percent={50}
                                    />
                                </div>
                                <h6 className="text-center">Tiến độ giải ngân</h6>
                                <div className="text-right mt-3">
                                    <NavLink to="/chatitydetail">Chi tiết chiến dịch <i class="fa fa-hand-point-right"></i></NavLink>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="mb-4">
                    <Card title="Cứu Trợ lũ lụt miền trung" extra={<div className="ml-3">
                        {/* <div style={{ cursor: 'pointer' }} onClick={showModal}>
                            <WarningOutlined />
                        </div>

                        <Modal title="Báo cáo chiến dịch" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <h5>Lý do báo cáo</h5>
                            <TextArea rows={4} />
                        </Modal> */}
                    </div>} >
                        <div className="row">
                            <div className="col-9">
                                <p className="mt-3 mb-3 row"><span className="col-6">Quỹ từ thiện: </span><span className="col-6">1,000,000,000 VNĐ</span></p>
                                <hr />
                                <p className="mt-3 mb-3 row"><span className="col-6">Người phụ trách chiến dịch: </span><span className="col-6">Lê Thành Tín</span></p>
                                <hr />
                                <p className="mt-3 mb-3 row"><span className="col-6">Ngày bắt đầu chiến dịch: 01/10/2021</span><span className="col-6">Ngày dự kiến hoàn thành: 20/10/2021</span></p>
                            </div>
                            <div className="col-3">
                                <div className="text-center mb-2">
                                    <Progress
                                        type="circle"
                                        strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#87d068',
                                        }}
                                        percent={5}
                                    />
                                </div>
                                <h6 className="text-center">Tiến độ giải ngân</h6>
                                <div className="text-right mt-3">
                                    <NavLink to="/chatitydetail">Chi tiết chiến dịch <i class="fa fa-hand-point-right"></i></NavLink>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="mb-4">
                    <Card title="Xây cầu bản Chang" extra={<div className="ml-3">
                        {/* <div style={{ cursor: 'pointer' }} onClick={showModal}>
                            <WarningOutlined />
                        </div>

                        <Modal title="Báo cáo chiến dịch" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <h5>Lý do báo cáo</h5>
                            <TextArea rows={4} />
                        </Modal> */}
                    </div>} >
                        <div className="row">
                            <div className="col-9">
                                <p className="mt-3 mb-3 row"><span className="col-6">Quỹ từ thiện: </span><span className="col-6">200,000,000 VNĐ</span></p>
                                <hr />
                                <p className="mt-3 mb-3 row"><span className="col-6">Người phụ trách chiến dịch: </span><span className="col-6">Vũ Hoàng Phát</span></p>
                                <hr />
                                <p className="mt-3 mb-3 row"><span className="col-6">Ngày bắt đầu chiến dịch: 12/09/2021</span><span className="col-6">Ngày dự kiến hoàn thành: 25/12/2021</span></p>
                            </div>
                            <div className="col-3">
                                <div className="text-center mb-2">
                                    <Progress
                                        type="circle"
                                        strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#87d068',
                                        }}
                                        percent={30}
                                    />
                                </div>
                                <h6 className="text-center">Tiến độ giải ngân</h6>

                                <div className="text-right mt-3">
                                    <NavLink to="/chatitydetail">Chi tiết chiến dịch <i class="fa fa-hand-point-right"></i></NavLink>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
