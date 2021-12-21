const Stack = require('./Stack');

describe('Data structures', () => {

    let stack = new Stack();

    beforeEach(() => {
        stack = new Stack();
    })
    
    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push('🥑');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🥑');
    });

    it('can pop off', () => {
        stack.push('👍');
        stack.pop();
        expect(stack.peek).toBe(undefined);
        expect(stack.top).toBe(-1);
    });
});
