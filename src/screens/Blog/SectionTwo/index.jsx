import { Divider, Input } from "antd"

const Index= ()=>{
    const { Search } = Input;
    return (
        <div className="w-full min-h-96 h-auto bg-white px-44 py-10 gap-4">
            <div className="w-full flex justify-between">
                <div className="text-black font-semibold font-poppins text-xl">All Posts</div>
                <div className="w-[35%]">
                    <Search placeholder="Search Posts"/>
                </div>
            </div>
            <Divider/>
            <div className="w-full">
                <h2>NO POSTS</h2>
            </div>
        </div>
    )
}

export default Index