
class HashMap {
    constructor(){
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.hashMap = new Array(this.capacity)
    }

    hash(key){
        let hashCode = 0;
        const primeNumber = 31;

        for(let i=0; i<key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.capacity;
        }
        return hashCode;
    }

    set(key, value){
        if(this.length() < this.capacity * this.loadFactor || this.has(key)){
            const index = this.hash(key);
            this.hashMap[index] = {...this.hashMap[index],[key]: value};
        }
        else {
            this.capacity *= 2;
            const entries = this.entries();
            this.clear()
            entries.forEach(entry => this.set(entry[0], entry[1]));
            this.set(key,value);
        }
    }

    get(key){
        const index = this.hash(key);
        if(index < 0 || index >= this.hashMap.length){
            throw new Error("Trying to access index out of bounds")
        }
        if(this.has(key))
            return this.hashMap[index][key];
        return;
    }

    has(key) {
        const index = this.hash(key);
        if(index < 0 || index >= this.hashMap.length){
            throw new Error("Trying to access index out of bounds");
        }
        if(this.hashMap[index] !== undefined)
            return Object.hasOwn(this.hashMap[index],key);
        return false;
    }

    remove(key){
        if(this.has(key)){
            const index = this.hash(key);
            if(index < 0 || index >= this.hashMap.length){
                throw new Error("Trying to access index out of bounds");
            }
            delete this.hashMap[index][key];
            return true;
        }
        return false;
    }

    length(){
        let count = 0;
        for(let i=0;i<this.hashMap.length;i++){
            if(this.hashMap[i] !== undefined){
                count += Object.keys(this.hashMap[i]).length;
            }
        }
        return count;
    }

    clear(){
        this.hashMap = [];
    }

    keys(){
        let result = [];
        for(let i=0;i<this.hashMap.length;i++){
            if(this.hashMap[i] !== undefined){
                result.push(...Object.keys(this.hashMap[i]));
            }
        }
        return result;
    }

    values(){
        let result = [];
        for(let i=0;i<this.hashMap.length;i++){
            if(this.hashMap[i] !== undefined){
                result.push(...Object.values(this.hashMap[i]));
            }
        }
        return result;
    }

    entries(){
        let result = [];
        for(let i=0;i<this.hashMap.length;i++){
            if(this.hashMap[i] !== undefined){
                result.push(...Object.entries(this.hashMap[i]));
            }
        }
        return result;
    }
}

export default HashMap