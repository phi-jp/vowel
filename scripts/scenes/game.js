
tm.define("GameScene", {
    superClass: "tm.app.Scene",

    init: function() {
        this.superInit();

        this.fromJSON({
            children: {
                targetLabel: {
                    type: "tm.display.Label",
                    init: 'play',
                    fillStyle: "#444",
                    fontSize: 80,
                    x: SCREEN_CENTER_X,
                    y: 200,
                },
                jaLabel: {
                    type: "tm.display.Label",
                    init: '遊ぶ',
                    fillStyle: "#444",
                    fontSize: 40,
                    x: SCREEN_CENTER_X,
                    y: 300,
                },
            }
        });

        var offsetX = SCREEN_WIDTH/2 - (2*BUTTON_SIZE);
        VOWEL.each(function(ch, i) {
            var b = CircleButton({
                text: ch,
                size: BUTTON_SIZE,
            }).addChildTo(this);

            b.x = offsetX + BUTTON_SIZE*i;
            b.y = 700;

            b.onpush = function() {
                this.check(b);
            }.bind(this);
        }, this);

        this.setQuestion();
    },

    setQuestion: function() {
        var q = QUESTIONS.pickup();
        var targetLabel = this.targetLabel;
        var jaLabel = this.jaLabel;

        targetLabel.text = q.word.replace(/[aiueo]/g, ' ');
        jaLabel.text = q.japanese;

        this.question = q;
    },

    check: function(b) {
        var targetLabel = this.targetLabel;
        var i = targetLabel.text.indexOf(' ');

        if (this.question.word[i] === b.getText()) {
            this.targetLabel.text = this.targetLabel.text.replace(' ', b.getText());
        }

        if (targetLabel.text.indexOf(' ') == -1) {
            var scene = JudgeScene({ image: "images/correct" });
            this.app.pushScene(scene);

            scene.onexit = function() {
                this.setQuestion();
            }.bind(this);
        }
    },

    onpointingstart: function(e) {
        var p = e.app.pointing;
        WaveEffect().addChildTo(this).setPosition(p.x, p.y);
    },

});


tm.define("CircleButton", {
    superClass: "tm.display.CanvasElement",

    init: function(param) {
        this.superInit();

        param = param || {};

        param.$safe({
            size: 150,
            text: 'A',
            fontColor: "white",
            bgColor: "hsl(180, 60%, 50%)",
            strokeColor: "transparent",
            lineWidth: 4,
        });

        this.fromJSON({
            children: {
                bg: {
                    type: "tm.display.CircleShape",
                    init: {
                        width: param.size,
                        height: param.size,
                        fillStyle: param.bgColor,
                    }
                },
                label: {
                    type: "tm.display.Label",
                    init: param.text,
                    fillStyle: param.fontColor,
                    fontSize: param.size/2,
                }
            }
        });

        this.radius = param.size/2;
        this.setInteractive(true, 'circle');

        this.onpointingstart = function() {
            // this.bg.fillStyle = 'red';
        };

        this.onpointingend = function() {
            // this.bg.fillStyle = param.bgColor;
            this.flare('push');
        };
    },

    getText: function() {
        return this.label.text;
    }
});


tm.define("WaveEffect", {
    superClass: "tm.display.CircleShape",

    init: function() {
        this.superInit({
            fillStyle: "white",
            strokeStyle: "transparent",
        });

        this.tweener.to({
            scaleX: 2,
            scaleY: 2,
            alpha: 0,
        }, 250).call(function() {
            this.remove();
        }, this)
    }
});



tm.define("JudgeScene", {
    superClass: "tm.app.Scene",

    init: function(param) {
        this.superInit();

        this.fromJSON({
            children: {
                filter: {
                    type: "tm.display.Shape",
                    init: {
                        width: SCREEN_WIDTH,
                        height: SCREEN_HEIGHT,
                        bgColor: "rgba(255, 255, 255, 0.5)"
                    },
                    originX: 0,
                    originY: 0,
                },
                img: {
                    type: "tm.display.Sprite",
                    init: param.image,
                    x: SCREEN_CENTER_X,
                    y: SCREEN_CENTER_Y,
                    scaleX: 0.5,
                    scaleY: 0.5
                }
            }
        });

        // tm.asset.Manager.get(param.se).clone().play();

        this.img.tweener
            .clear()
            .scale(1, 250, "easeOutElastic")
            .wait(500)
            .call(function() {
                this.app.popScene();
            }, this)
            ;
    },

    onpointingstart: function() {
        this.app.popScene();
    }
});

