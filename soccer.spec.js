describe("Tests for the soccer game", () => {
    describe("Tests for the getTotalPoints function", () => {
        it(`should return 10 for a 'wwdlw' results`, () => {
            const result = getTotalPoints('wwdlw');

            expect(result).toEqual(10);
        });
    });

    describe('Tests for getPointsFromResult function', () => {
        it(`it should return 0 for l`, () => {
            const result = getPointsFromResult('l');
            expect(result).toEqual(0);
        });
        
        it(`it should return 1 for d`, () => {
            const result = getPointsFromResult('d');
            expect(result).toEqual(1);
        });

        it(`it should return 3 for w`, () => {
            const result = getPointsFromResult('w');
            expect(result).toEqual(3);
        });
    });

    describe('Tests for orderTeams function', () => {
        it(`it should return 'Sounders: 4\nTimbers: 7\nGalaxy: 10`, () => {
            const sounders = {name: 'Sounders', results: 'wdl'};
            const timbers = {name: 'Timbers', results: 'wdlw'};
            const galaxy = {name: 'Galaxy', results: 'wdlww'};
            const teamsResult = orderTeams(sounders, timbers, galaxy);
            const orderedTeamsTest = `Sounders: 4\nTimbers: 7\nGalaxy: 10`;

            expect(teamsResult).toEqual(orderedTeamsTest);
        });
    });
});