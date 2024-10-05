export class  RefreshTokenRequest {
    accessToken;
    refreshToken;

    constructor(access, refresh) {
        this.accessToken = access;
        this.refreshToken = refresh;
    }
}