import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '648bc6f31e64446a99f893301a281ac0'
    }
}
)