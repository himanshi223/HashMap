class HashSet {
    constructor(){
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.hashSet = new Array(this.capacity)
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

    set(key){
        if(this.length() < this.capacity * this.loadFactor || this.has(key)){
            const index = this.hash(key);
            if(this.hashSet[index] !== undefined)
                this.hashSet[index] = [...this.hashSet[index],key];
            else 
                this.hashSet[index] = [key];
        }
        else {
            this.capacity *= 2;
            const keys = this.keys();
            this.clear()
            keys.forEach(key=> this.set(key));
            this.set(key);
        }
    }

    get(key){
        const index = this.hash(key);
        if(index < 0 || index >= this.hashSet.length){
            throw new Error("Trying to access index out of bounds")
        }
        if(this.has(key))
            return key;
        return;
    }

    has(key) {
        const index = this.hash(key);
        if(index < 0 || index >= this.hashSet.length){
            throw new Error("Trying to access index out of bounds");
        }
        if(this.hashSet[index] !== undefined)
            return this.hashSet[index].includes(key);
        return false;
    }

    remove(key){
        if(this.has(key)){
            const index = this.hash(key);
            if(index < 0 || index >= this.hashSet.length){
                throw new Error("Trying to access index out of bounds");
            }
            const bucket = this.hashSet[index];
            const innerIndex = bucket.indexOf(key);
            bucket = bucket.slice(0,innerIndex) + bucket.slice(innerIndex + 1, bucket.length)
            return true;
        }
        return false;
    }

    length(){
        let count = 0;
        for(let i=0;i<this.hashSet.length;i++){
            if(this.hashSet[i] !== undefined){
                count += this.hashSet[i].length;
            }
        }
        return count;
    }

    clear(){
        this.hashSet = [];
    }

    keys(){
        let result = [];
        for(let i=0;i<this.hashSet.length;i++){
            if(this.hashSet[i] !== undefined){
                result.push(...this.hashSet[i]);
            }
        }
        return result;
    }

}

export default HashSet