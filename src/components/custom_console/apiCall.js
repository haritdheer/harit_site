import axios from "axios";

const fetchCommit = async () => {
    try {
        let data = await axios.get("https://api.github.com/repos/haritdheer/portfolio_frontend/commits")

        if (data) {
            return data;
        }
    }
    catch (err) {
        return err
    }
}

export default fetchCommit;