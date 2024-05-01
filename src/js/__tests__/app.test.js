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

describe('ErrorRepository', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
    });

    test('adding an error', () => {
        errorRepo.addError(404, 'Page not found');
        expect(errorRepo.errorMap.size).toBe(1);
    });

    test('translating an existing error', () => {
        errorRepo.addError(404, 'Page not found');
        expect(errorRepo.translate(404)).toBe('Page not found');
    });

    test('translating an unknown error', () => {
        expect(errorRepo.translate(500)).toBe('Unknown error');
    });

    test('translating multiple errors', () => {
        errorRepo.addError(404, 'Page not found');
        errorRepo.addError(500, 'Internal server error');
        errorRepo.addError(403, 'Access forbidden');
        expect(errorRepo.translate(404)).toBe('Page not found');
        expect(errorRepo.translate(500)).toBe('Internal server error');
        expect(errorRepo.translate(403)).toBe('Access forbidden');
    });
});
