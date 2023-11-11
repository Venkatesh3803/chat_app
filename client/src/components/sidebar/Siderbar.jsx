import { useEffect, useState } from "react"
import "./Sidebar.css"
import { BiSearch } from "react-icons/bi"
import { publicRequest } from "../../redux/axios"
import ConvList from "../convList/ConvList"
import SearchList from "../searchList/SearchList"

const Siderbar = ({ conversation, user, setConv, setConversation, online }) => {

    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const res = await publicRequest.get(`user?search=${search}`)
                let result = res.data;
                setSearchResult(result.filter(u => u?._id !== user?._id))
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchSearch();
    }, [search])

    return (
        <div className="sidebar">
            <div className="search-box">
                <div className="search-top">
                    <h4>Chat</h4>
                    <div className="search">
                        <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                        <BiSearch style={{ cursor: "pointer" }} />
                    </div>
                </div>
                {search &&
                    <div className="chat-list">
                        {searchResult.length === 0 && <span>No Results Found</span>}
                        {searchResult?.map((s) => {
                            return (
                                <SearchList search={s} key={s._id} setConversation={setConversation} conversation={conversation} setConv={setConv} />
                            )
                        })}
                    </div>

                }
            </div>

            <div className="chat-list">
                <h4 style={{ marginBottom: "1rem" }}>Friends</h4>
                {conversation.length === 0 && <span>Search For Friends</span>}
                {conversation.map((c) => {
                    return (
                        <ConvList conversation={c} user={user} key={c._id} setConv={setConv} online = {online}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Siderbar
