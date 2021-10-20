import React from 'react'

export default function Login() {

    return (
        <div className="container-flute p-0" style={{ backgroundImage:`url('https://www.sas.com/profile/ui/images/profile-background.gif')`, backgroundSize:'cover', height:'100vh' }}>
            <div className="m-auto" style={{ width: '500px' }}>

                <div className="pt-5 pb-5">
                <h1 className="mb-4 text-white">CES xin chào!</h1>
                    <div className="mb-5 bg-white" style={{borderRadius:'10px'}}>
                        <form action="" className="p-5">
                            
                            <h2 className="text-center mb-5">Đăng nhập</h2>
                            <div class="form-group">
                                <label for="">Tài khoản</label>
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="">Mật khẩu</label>
                                <input type="password"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                            </div>
                            <div class="form-group">
                                <a href="/home" className="btn btn-block" style={{ backgroundColor: '#ff8224' }}>Đăng nhập</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
