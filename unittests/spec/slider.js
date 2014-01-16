describe('Slider Tests', function() {
    beforeEach(function() {
        this.slider = nb.find('slider');
        this.sliderDisabled = nb.find('slider-disabled');
    });
    afterEach(function() {
        delete this.slider;
        delete this.sliderDisabled;
    });

    describe('Init', function() {
        it('should be inited', function() {
            expect(this.slider).to.not.equal(null);
        });

        it('should has defined initial value', function() {
            var input = this.slider.node.querySelector('.nb-slider__fallback');

            expect(input.value).to.be.equal('25');
        });

        it('should fire event nb-slider_slide', function() {
            var checked = false;
            this.slider.on('nb-slider_slide', function() {
                checked = true;
            });

            this.slider.$body.data('uiSlider')._trigger('slide');

            expect(checked).to.be.ok();
        });

        it('should fire event nb-slider_slidestop', function() {
            var checked = false;
            this.slider.on('nb-slider_slidestop', function() {
                checked = true;
            });

            this.slider.$body.data('uiSlider')._trigger('stop');

            expect(checked).to.be.ok();
        });

        it('should fire event nb-slider_slidestart', function() {
            var checked = false;

            this.slider.on('nb-slider_slidestart', function() {
                checked = true;
            });

            this.slider.$body.data('uiSlider')._trigger('start');

            expect(checked).to.be.ok();
        });
    });

    describe('#setValue()', function() {
        it('should change the value', function() {
            var input = this.slider.node.querySelector('.nb-slider__fallback');
            this.slider.setValue(30);

            expect(input.value).to.be.equal('30');
        });

        it('should throws nb-slider_value-set event', function() {
            var checked = false;
            this.slider.on('nb-slider_value-set', function() {
                checked = true;
            });

            this.slider.setValue(48);

            expect(checked).to.be.ok();
        });
    });

    describe('#getValue()', function() {
        it('should return the right value', function() {
            expect(this.slider.getValue()).to.be.equal(25);
        });
    });

    describe('#setName()', function() {
        it('should set name`s value of input', function() {
            var input = this.slider.node.querySelector('.nb-slider__fallback');
            this.slider.setName('price');

            expect(input.name).to.be.equal('price');
        });

        it('should throws nb-slider_name-set event', function() {
            var checked = false;
            this.slider.on('nb-slider_name-set', function() {
                checked = true;
            });

            this.slider.setName('price');

            expect(checked).to.be.ok();
        });
    });

    describe('#getName()', function() {
        it('should return false if name wasn`t setted', function() {
            expect(this.slider.getName()).not.to.be.ok();
        });

        it('should return specified value', function() {
            expect(this.sliderDisabled.getName()).to.be.equal('price');
        })
    });

    describe('#disable()', function() {
        it('should set disable state', function() {
            var $control = this.slider.$node.find('.nb-slider__body');

            this.slider.disable();

            expect($control.slider('option', 'disabled')).to.be.ok();
        });

        it('should has disabled mod', function() {
            this.slider.disable();

            expect(this.slider.$node.hasClass('is-disabled')).to.be.ok();
        });
    });

    describe('#enable()', function() {
        it('should reset disabled state', function() {
            var $conrol = this.slider.$node.find('.nb-slider__body');

            this.sliderDisabled.enable();

            expect($conrol.slider('option', 'disabled')).not.to.be.ok();
        });

        it('should not has disabled mod', function() {
            this.sliderDisabled.enable();

            expect(this.slider.$node.hasClass('nb-slider_disabled')).not.to.be.ok();
        });
    });

    describe('#isEnabled()', function() {
        it('should return true if enabled', function() {
            expect(this.slider.isEnabled()).to.be.ok();
        });

        it('should return false if disabled', function() {
            expect(this.sliderDisabled.isEnabled()).not.to.be.ok();
        });
    });

    describe("#destroy()", function() {

        beforeEach(function() {
            sinon.spy($.fn, 'slider');
            sinon.spy($.fn, 'off');
            sinon.spy(nb, 'destroy');
        });

        afterEach(function() {
            $.fn.slider.restore();
            $.fn.off.restore();
            nb.destroy.restore();
        });

        it("should call $.fn.slider('destroy')", function() {
            this.slider.destroy();
            expect($.fn.slider.calledWithExactly('destroy')).to.be.equal(true);
        });

        it("should call $.fn.off('slidestart slidestop slide')", function() {
            this.slider.destroy();
            expect($.fn.off.calledWithExactly('slidestart slidestop slide')).to.be.equal(true);
        });

        it("should call nb.destroy('slider')", function() {
            this.slider.destroy();
            expect(nb.destroy.calledWithExactly('slider')).to.be.equal(true);
        });
    });

});