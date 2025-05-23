class StorageService {
    private storage: Storage;

    constructor() {
        if (typeof window === 'undefined' || !window.localStorage) {
            throw new Error('StorageService is not available on the client');
        }

        this.storage = localStorage;
    }

    get<T>(key: string): { value: T, ttl: number } | undefined {
        try {
            const item = this.storage.getItem(key)
            if (!item) return;
            return JSON.parse(item) as { value: T, ttl: number };
        } catch (err) {
            console.error(`Error getting ${key} from local storage`, err);
            return;
        }
    }

    set<T>(key: string, value: T, ttl: number) {
        try {
            const parsedValue = JSON.stringify({ value: value, ttl: (Date.now() + ttl) });
            localStorage.setItem(key, parsedValue);
            return;
        } catch (err) {
            console.error(`Error setting ${key} to local storage`, err);
            return;
        }
    }

    remove(key: string) {
        try {
            return localStorage.removeItem(key);
        } catch (err) {
            console.error(`Error removing ${key} from local storage`, err)
        }
    }
};

export default new StorageService();