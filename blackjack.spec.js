describe('Tests for the blackjack game', () => {
    it('should return 13 for a six and seven and not soft', () => {
        const hand = [
            {displayVal: 'Six', val: 6, suit: 'hearts'},
            {displayVal: 'Seven', val: 7, suit: 'hearts'}
        ];

        const result = calcPoints(hand);

        expect(result.total).toEqual(13);
        expect(result.isSoft).toEqual(false);        
    });

    it('should return 21 for 10, and an Ace and soft', () => {
        const hand = [
            {displayVal: 'Ten', val: 10, suit: 'hearts'},
            {displayVal: 'Ace', val: 11, suit: 'diamonds'}
        ];

        const result = calcPoints(hand);

        expect(result.total).toEqual(21);
        expect(result.isSoft).toEqual(true);   
    });

    it('should return 16 for 5, 10, and an Ace and not soft', () => {
        const hand = [
            {displayVal: 'Ten', val: 10, suit: 'hearts'},
            {displayVal: 'Five', val: 5, suit: 'diamonds'},
            {displayVal: 'Ace', val: 11, suit: 'diamonds'}
        ];

        const result = calcPoints(hand);

        expect(result.total).toEqual(16);
        expect(result.isSoft).toEqual(false);      
    });

    it('should return 12 for 2 Aces and soft', () => {
        const hand = [
            {displayVal: 'Ace', val: 11, suit: 'hearts'},
            {displayVal: 'Ace', val: 11, suit: 'diamonds'}
        ];

        const result = calcPoints(hand);

        expect(result.total).toEqual(12);
        expect(result.isSoft).toEqual(true);   
    });

    it('should return 17 for 2 Aces, a 10, and a 5 and not soft', () => {
        const hand = [
            {displayVal: 'Ace', val: 11, suit: 'hearts'},
            {displayVal: 'Ace', val: 11, suit: 'diamonds'},
            {displayVal: 'Ten', val: 10, suit: 'hearts'},
            {displayVal: 'Five', val: 5, suit: 'diamonds'}
        ];

        const result = calcPoints(hand);

        expect(result.total).toEqual(17);
        expect(result.isSoft).toEqual(false);
    });
});