describe("Tests for the soccer game", () => {
    describe("Tests for the getTotalPoints function", () => {
        it(`should return 10 for a 'wwdlw' results`, () => {
            const result = getTotalPoints('wwdlw');

            expect(result).toEqual(10);
        });
    });

    describe('Tests for orderTeams function', () => {
        it(`it should return 'Sounders: 4\nTimbers: 7\nGalaxy: 11`, () => {
            const teams = [
                {name: 'Sounders', results: 'wdl'},
                {name: 'Timbers', results: 'wdlw'},
                {name: 'Galaxy', results: 'wdlwww'}
            ];
            const teamsResult = orderTeams(teams);
            const orderedTeamsTest = `Sounders: 4\nTimbers: 7\nGalaxy: 11`;

            expect(teamsResult).toEqual(orderedTeamsTest);
        });
    });
});