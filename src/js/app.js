class ErrorRepository {
    constructor() {
        this.errorMap = new Map();
    }

    addError(code, description) {
        this.errorMap.set(code, description);
    }

    translate(code) {
        if (this.errorMap.has(code)) {
            return this.errorMap.get(code);
        } else {
            return 'Unknown error';
        }
    }
}