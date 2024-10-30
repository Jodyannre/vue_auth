import { Ref, inject } from "vue";
import { VueCookies } from "vue-cookies";


class CookiesService {  
    $cookies = inject<VueCookies>('$cookies'); 

    setCookie(key: string, value: string): void {
        this.$cookies?.set(key, value);
    }

    getCookie(key:string): string | undefined {
        return this.$cookies?.get(key);
    }

    removeCookie(key: string): void {
        this.$cookies?.remove(key);
    }

    getAllCookies(): Array<string> | undefined {
        return this.$cookies?.keys();
    }
}

export default CookiesService;  