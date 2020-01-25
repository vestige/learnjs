describe('LearnJS', function(){
    it('can show a problem view', function(){
        learnjs.showView('#problem-1');
        expect($('.view-container .problem-view').length).toEqual(1);
    });
    it('show the landing page view with no hash', function() {
        learnjs.showView('');
        expect($('.view-container .landing-view').length).toEqual(1);
    });
    it('check the view parameters', function(){
        spyOn(learnjs, 'problemView');
        learnjs.showView('#problem-42');
        expect(learnjs.problemView).toHaveBeenCalledWith('42');
    });
});