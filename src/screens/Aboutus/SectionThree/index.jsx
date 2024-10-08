import BgCover from '../../../assets/contact-us-bg.png'
import Call from '../../../assets/call.png'
import Location from '../../../assets/location.png'
import Mail from '../../../assets/email.png'
import Facebook from '../../../assets/facebook.png'
import Twitter from '../../../assets/twitter.png'
import Instagram from '../../../assets/instagram.png'
import LinkedIn from '../../../assets/linkedin.png'
import Whatsapp from '../../../assets/whatsapp.png'
import { Button, Form, Input } from 'antd'
const Index = ()=>{
    const [form] = Form.useForm();

    const onFinish = (value)=>{
        // form.validateFields((value)=>{
        //     console.log(value);
        // })
    }

    return (
        <div className="w-full h-[120vh] bg-grayscale flex justify-center">
            <div className="w-3/4 h-full mt-12">
                <div>
                    <div className="font-poppins text-3xl text-black font-semibold">Contact <span className="text-primaryColor">Us</span></div>
                    <p className="text-black text-sm font-poppins mt-4">We’re here to help you! If you have any questions, concerns, or feedback about SMSProtect, please don't hesitate to get in touch with us. We're committed to providing you with the support and assistance you need.
                    </p>
                </div>
                <div className="flex w-full h-full mt-4">
                    <div className="flex-1 h-[85vh] bg-black relative bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${BgCover})`,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <div className='w-full h-full absolute bg-black/20' style={{borderTopLeftRadius:20,borderBottomLeftRadius:20}}/>
                            <div className='w-3/4 h-3/4 m-10 p-10 bg-black relative rounded-xl'>
                                <div className='text-white font-bold font-poppins'>Contact</div>
                                <div className='text-white font-bold font-poppins'>Information</div>
                                <div className='text-smmx font-poppins mt-4 text-white'> Say something to start a chat with us.</div>
                                <div className='absolute bottom-0 text-white flex flex-col'>
                                   <div className='flex gap-2 mb-4'>
                                        <div><img src={Call}/></div>
                                        <div className='text-white text-smmx font-poppins'>+1012 3456 789</div>
                                   </div> 
                                   <div className='flex gap-2 mb-4'>
                                        <div><img src={Mail}/></div>
                                        <div className='text-white text-smmx font-poppins'>demo@gmail.com</div>
                                   </div>
                                   <div className='flex gap-2 mb-4'>
                                        <div><img src={Location}/></div>
                                        <div className='text-white text-smmx font-poppins'>
                                        132 Dartmouth Street Boston, Massachusetts 02156 United States
                                        </div>
                                   </div>
                                  
                                   
                                </div>
                            
                            </div>

                            <div className='flex flex-row gap-2 m-10'>
                                <div className='w-8 h-8 rounded-full bg-red-500 p-1 flex justify-center items-center' style={{backgroundColor:'#222'}}>
                                    <img src={Facebook}/>
                                </div>
                                <div className='w-8 h-8 rounded-full bg-red-500 p-1 flex justify-center items-center' style={{backgroundColor:'#222'}}>
                                    <img src={Twitter}/>
                                </div>
                                <div className='w-8 h-8 rounded-full bg-red-500 p-1 flex justify-center items-center' style={{backgroundColor:'#222'}}>
                                    <img src={Instagram}/>
                                </div>
                                <div className='w-8 h-8 rounded-full bg-red-500 p-1 flex justify-center items-center' style={{backgroundColor:'#222'}}>
                                    <img src={LinkedIn}/>
                                </div>
                                <div className='w-8 h-8 rounded-full  p-1 flex justify-center items-center' style={{backgroundColor:'#222'}}>
                                    <img src={Whatsapp}/>
                                </div>
                            </div>


                      
                            
                    </div>
                    <div className="flex-1 p-10 ">
                        
                        <div className='mt-1 w-full'>
                            <Form
                                name="contact"
                                layout={"vertical"}
                                form={form}
                                scrollToFirstError={true}
                                onFinish={onFinish}>
                                <div className='flex gap-3 mb-4'>
                                        <Form.Item name="first_name"  rules={[{
                                                required: true,
                                                message: "Provide First Name"
                                            }]} className="w-full">

                                                <Input className='p-2 rounded-xl' placeholder='First name'/>
                                            
                                        </Form.Item> 

                                        <Form.Item name="last_name"  rules={[{
                                                required: true,
                                                message: "Provide Last Name"
                                            }]} className="w-full">

                                                <Input className='p-2 rounded-xl' placeholder='Last name'/>
                                        
                                        </Form.Item> 
                                </div>
                                <div className='flex gap-3 mb-4'>
                                        <Form.Item name="first_name"  rules={[{
                                                required: true,
                                                message: "Provide Email"
                                            }]} className="w-full">

                                                <Input className='p-2 rounded-xl text-black'  placeholder='Email Address'/>
                                            
                                        </Form.Item> 

                                        <Form.Item name="last_name"  rules={[{
                                                required: true,
                                                message: "Provide Phonenumber"
                                            }]} className="w-full">

                                                <Input className='p-2 rounded-xl' placeholder='Phone number'/>
                                        
                                        </Form.Item> 
                                </div>
                                <div className='w-full mb-4'>
                                    <Form.Item name="last_name"  rules={[{
                                                required: true,
                                                message: "Provide Subject"
                                            }]} className="w-full">

                                                <Input className='p-2 rounded-xl' placeholder='Subject'/>
                                        
                                    </Form.Item> 
                                </div>

                                <div className='w-full mb-4'>
                                    <Form.Item name="message"  rules={[{
                                                required: true,
                                                message: "Write message "
                                            }]} className="w-full">

                                                <Input.TextArea className='p-2 rounded-xl' rows={8} placeholder='Write Message'/>
                                        
                                    </Form.Item> 
                                </div>

                                <div className='w-full'>
                                    <Button className='bg-primaryColor text-white' htmlType="submit">Submit</Button>
                                </div>

                            </Form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;