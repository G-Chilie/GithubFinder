class Github {
    constructor() {
        this.client_id = 'ef1d00eeed2d4414581a'
        this.client_secriet = '355d6b109b81ae625707820ccfdc914a70bcc089'; 
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}