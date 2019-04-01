import axios from 'axios'

export function 
getTop (id) {
    const url = `https://api.bzqll.com/music/netease/songList?key=579621905&id=${id}`
        // HOST + `/top/list?idx=${id}`

    return axios.get(url)
}
