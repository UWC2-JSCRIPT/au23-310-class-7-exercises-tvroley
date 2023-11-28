describe("Tests for the soccer game", () => {
    describe("Tests for the getTotalPoints function", () => {
        it(`should return 10 for a 'wwdlw' results`, () => {
            const result = getTotalPoints('wwdlw');

            expect(result).toEqual(10);
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