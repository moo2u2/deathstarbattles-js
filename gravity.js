const canvas = document.getElementById('gravityCanvas');
const extraCanvas = document.getElementById('extraCanvas');
const ctx = canvas.getContext('2d');
const extraCtx = extraCanvas.getContext('2d');

let isMouseDown = false;
let /* int */ finishedDrawing;
let /*Font */ firstFont;
let /* Font */ secondFont;
let /* int */ maxNumOfPlanets = 16;
let /* int */ prtLower = 8000;
let /* int */ maxPlayers = 12;
// let /* int */ startsAtTen = 10;
let /* int */ numOfPlanetTypes = 21;
let /* int */ numOfStationTypes = 6;
let /* int */ numOfCpuTypes = 5;
let /* int */ shwEvery = 5;
let /* int */ everyTen = 5;
let /* boolean */  numberOfStationsIs0 = false;
let /* boolean */  paused = false;
let /* boolean */  slowMo = false;
let /* int */ bloodlust = -1;
let /* int */ oppression = -1;
// let /* int */ startsAtMinus1Third = -1;
// let /* int */ startsAtMinus1Fourth = -1;
// let /* int */ startsAtMinus1Fifth = -1;
// let /* int */ startsAt5again = 5;
// let /* int */ startsAt15 = 15;
let /* int */ checkActive = 0;
let /* int */ drawing = 1;
let /* int */ scenario = 1;
let /* int */ planetType = 0;
let /* int */ numberOfPlanets = 0;
let /* int */ currentStationsPerPlayer = 0;
let /* int */ numberOfTeams = 0;
let /* int */ numberOfStations = 0;
let /* int */ numOfPlanets = 0;
let /* int */ stationsPerPlayer = 0;
let /* int */ totalPlayers = 0;
let /* int */ humanPlayers = 0;
let /* int */ cpuType = 0;
let /* int */ buttonState = 0;
let /* int */ startType = 0;
let /* int */ tornamentmode = 0;
let /* int */ gameNumber = 0;
let /* int */ stationType = 0;
let /* int */ currentNumberOfStations = 0;
let /* int */ maxButtonStates = 0;
let /* int */ nextGaussian = 0;
let /* int */ preferredLayoutSize = 0;
let /* int */ random = 0;
let /* int */ randomStationType = 0;
let /* int */ keyDown = 0;
let /* int */ round = 0;
let /* int */ currentStation = 0;
let /* long */  drawTime = 0;
let /* long */  currentTimeForDelay = 0;
let /* long */  delaytime = 0;
let /* boolean */  focusedFirstGo = false;
let /* boolean */  isDebug = false;
let /* boolean */  isExtraDebug = false;
let /* int */ currentWinner = 0;
let /* int */ setValue = 0;
let /* int */ sin = 0;
let angleSlider;
let powerSlider;
let gridLayout1MinHeight = 30;
let gridLayout2MinHeight = 30;
let gridLayout1PreferredHeight = 30;
let gridLayout2PreferredHeight = 30;
let gridLayout1MinWidth = 900;
let gridLayout2MinWidth = 900;
let gridLayout1PreferredWidth = 900;
let gridLayout2PreferredWidth = 900;
let /* Button */  updateBtn;
let /* Button */  valueOf;
let /* Button */  white;
let /* Button */  yellow;
let /* Button */  Z;
let /* Button */  C;
let /* Button */  B;
let /* Button */  D;
//    Thread F;
let /* boolean */  J;
let /* int */ showTitleScreen = 0;
let resizeRatio = 0.0;
let freeArea = 0.0;
let /*Color[]*/ planetColours;
let /* double[] */ planetX;
let /* double[] */ planetY;
let /* double[] */ planetWidthMaybe;
let /* int[] */ resizedPlanetWidthMaybe;
let /* int[] */ drawingPlanetType;
let /* double[] */ planetNumber;
let /* double[] */ planetGravityMaybe;
let /* int[] */ R;
let /* double[] */ planetDoubleNumber;
let totalMass;
let /*Color[]*/ teamColours;
let /*Color[]*/ teamColoursColour;
let /* double[] */ stationX;
let /* double[] */ stationY;
let /* double[] */ i;
let /* double[] */ z;
let /* double[] */ c;
let /* int[] */ hyperspaceCount;
let /* int[] */ stationRadius;
let /* int[] */ f;
let /* int[] */ j;
let /* int[] */ s;
let /* int */ a = 0;
let /* int */ topTeam = 0;
let /* int */ winningTeam = 0;
let /* int */ h = 0;
let /* int */ k = 0;
let /* int */ l = 0;
let /* int */ m = 0;
let /* int */ n = 100;
let /* int[] */ teleports;
let /* let /* int[][] */ nTeleports;
let q = 0.0;
let r = 0.0;
let /* int[] */ totalPower;
let /* int[] */ vengencekills;
let /* int[] */ strategykills;
let /* int[] */ tacticsKills;
let /* int[] */ bullykills;
let /* int[] */ opressionkills;
let /* int[] */ longshotkills;
let /* int[] */ closeshotkills;
let /* int[] */ playerTurn;
let /* int[] */ ownGoals;
let /* int[] */ suicides;
let /* int[] */ kills;
let /* int[] */ shots;
let /* int[] */ killedby;
let /* int[] */ survives;
let /* int[] */ playerData9;
let /* int[] */ playerData15;
let /* int[] */ unused1;
let /* int[] */ playerData10;
let /* int[] */ playerData11;
let /* int[] */ playerData13;
let /* int[] */ playerShots;
let /* int[] */ playerData14;
let /* int[] */ playerData8;
let /* int[] */ currentStatus;
let /* int[] */ UI;
let /* double[] */ currentExplosion;
let /* int[] */ teams;
let /* int[] */ stations;
let /* int[] */ currentHyperspace;
let /* int[] */ currentAngle;
let /* int[] */ currentPower;
let /* int[] */ lastAngle;
let /* int[] */ lastPower;
let /* int[] */ lastdisp;
let /* let /* int[][] */ fI;
let /* let /* int[][] */ jI;
let /* int */ activePlayer = 0;
let /* int[] */ ais;
let /*Color[]*/ eI;
let /* double[] */ smallX;
let /* double[] */ smallY;
let /* double[] */ someXval1;
let /* double[] */ someYval1;
let /* double[] */ someXval2;
let /* double[] */ someYval2;
let /* double[] */ someXval3;
let /* double[] */ someYval3;
let /* double[] */ someXval4;
let /* double[] */ someYval4;
let /* double[] */ tailCircleRadius;
let /* int[] */ resizedTailCircleRadius;
let /* double[] */ shotExp;
let /* double[] */ somePowerTimesSin;
let /* double[] */ somePowerTimesCos;
let /* int[] */ shotStatus;
let /* int */ currentMode = 0;
let /* int */ currentTurn = 0;
let /* int */ dataIsReset = 0;
let /* int */ somethingLikeStarted2 = 0;
let /* int */ isInHyperspaceMaybe = 0;
let /* int */ drawing2 = 0;
let /* int */ hyperSpacing = 0;
let /* int */ SZ = 0;
let /* int */ polygonNPoints = 0;
let /* int */ EZ = 0;
let /* int[] */ polygonXPoints;
let /* int[] */ polygonYPoints;
let /* int[] */ KZ;
let /* int[] */ LZ;
let /* int[] */ MZ;
let /* let /* int[][] */ shotTailX;
let /* let /* int[][] */ shotTailY;
let /* int[] */ PZ;
let /* int[] */ QZ;
let /* int[] */ pathl;
let TZ = 0.0;
let UZ = 0.0;
let VZ = 0.0;
let /*Color[]*/ WZ;
let timeStep = 0.0;
let iZ = 0.0;
let /* int */ currentStep = 0;
let /* int */ prtUpper = 0;
let onePoint0 = 0.0;
let ratioZeroPoint8 = 0.0;
let zeroPoint2 = 0.0;
let fourPoint0 = 0.0;
let eightPoint0 = 0.0;
// let  aZ;
// let eZ;
let /* int */ topgap = 0;
let /* int */ bottomgap = 0;
let topgapoverconv = 0.0;
let bottomgapoverconv = 0.0;
let /* int */ canvasWidth = 0;
let /* int */ canvasHeight = 0;
let resizedWidth = 0.0;
let resizedHeight = 0.0;
let negativeResizedWidth = 0.0;
let negativeResizedWidth2 = 0.0;
let doubleResizedWidth = 0.0;
let resizedHeightPlusWidth = 0.0;

function init() {
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    resizeRatio = canvasWidth / 700.0;
    resizedWidth = canvasWidth / resizeRatio;
    resizedHeight = canvasHeight / resizeRatio;
    negativeResizedWidth = -resizedWidth;
    negativeResizedWidth2 = -resizedWidth;
    doubleResizedWidth = 2.0 * resizedWidth;
    resizedHeightPlusWidth = resizedHeight + resizedWidth;

    // TODO add scrollbars

    topgap = gridLayout1MinHeight;
    bottomgap = gridLayout2MinHeight;
    topgapoverconv = topgap / resizeRatio;
    bottomgapoverconv = bottomgap / resizeRatio;

    canvas.addEventListener('mousedown', () => isMouseDown = true);
    canvas.addEventListener('mousemove', handleMouseEvent);
    canvas.addEventListener('mouseup', (e) => {
        handleMouseEvent(e);
        isMouseDown = false;
    });

    isInHyperspaceMaybe = 1;
    showTitleScreen = 1;
    generateRandomData();

    for (let playerCount = 1; playerCount < maxPlayers; ++playerCount) {
        playerTurn[playerCount] = 0;
        ownGoals[playerCount] = 0;
        suicides[playerCount] = 0;
        kills[playerCount] = 0;
        shots[playerCount] = 0;
        killedby[playerCount] = -1;
        survives[playerCount] = 0;
        playerData8[playerCount] = 0;
        playerData9[playerCount] = 0;
        playerData10[playerCount] = 0;
        playerData11[playerCount] = 0;
        playerShots[playerCount] = 0;
        playerData13[playerCount] = 0;
        playerData14[playerCount] = 0;
        playerData15[playerCount] = 0;
    }

    firstFont = `${m}px Serif`;
    secondFont = `${l}px Courier`;

    ctx.font = firstFont;
    for (let var2 = " Set number of players, planets and which scenairio and then press the start button to begin play. "; ctx.measureText(var2).width > canvasWidth; --m) {
        firstFont = `${m}px Serif`;
        ctx.font = firstFont;
    }

    ctx.font = secondFont;
    for (let var2 = " D E A T H   S T A R   B A T T L E S"; ctx.measureText(var2).width > canvasWidth; --l) {
        secondFont = `${l}px Courier`;
        ctx.font = secondFont;
    }

    J = false;
    startThread();
    window.requestAnimationFrame(run);
}

function startThread() {
    J = true;
}

function stop() {
    J = false;
}

function destroy() {
    J = false;
}

function generateRandomData() {
    try {
        let var1 = 650.0;
        let var3 = 10.0;
        let var5 = 0.15;
        let /* boolean */  negativePlanetsMaybe = false;
        let /* int */ consumedAreaAmtMaybe = 0;
        let /* boolean */  consumedAreaMaybe = false;
        somethingLikeStarted2 = 0;
        currentTurn = 0;
        if (tornamentmode == 0 || gameNumber == 0) {
            numberOfTeams = totalPlayers;
            currentStationsPerPlayer = stationsPerPlayer;
            if (numberOfTeams * currentStationsPerPlayer > maxPlayers) {
                currentStationsPerPlayer = Math.floor(maxPlayers / totalPlayers);
            }

            numberOfStations = numberOfTeams * currentStationsPerPlayer;
        }

        if (numOfPlanets == maxNumOfPlanets + 1) {
            numberOfPlanets = Math.floor((Math.random() * Math.random() + Math.random()) * 0.5 * 9.0 + 0.9);
            if ((numberOfPlanets == 0 || numberOfPlanets == 1) && Math.random() < 0.9) {
                ++numberOfPlanets;
            }

            if (numberOfPlanets > 8) {
                numberOfPlanets = 8;
            }
        } else if (numOfPlanets == maxNumOfPlanets + 2) {
            numberOfPlanets = Math.floor((Math.random() * Math.random() + Math.random()) * 0.5 * (maxNumOfPlanets + 1) + 0.9);
            if ((numberOfPlanets == 0 || numberOfPlanets == 1) && Math.random() < 0.9) {
                ++numberOfPlanets;
            }

            if (numberOfPlanets > maxNumOfPlanets) {
                numberOfPlanets = maxNumOfPlanets;
            }
        } else if (tornamentmode == 0 || gameNumber == 0) {
            numberOfPlanets = numOfPlanets;
        }

        if (stationType == numOfStationTypes + 1) {
            randomStationType = Math.floor((Math.random() + Math.random()) * 0.5 * numOfStationTypes + 1.0);
        } else if (tornamentmode == 0 || gameNumber == 0) {
            randomStationType = stationType;
        }

        currentNumberOfStations = humanPlayers * currentStationsPerPlayer;
        if (currentNumberOfStations > numberOfStations) {
            currentNumberOfStations = numberOfStations;
        }

        nextGaussian = cpuType;
        if (currentNumberOfStations == 0) {
            numberOfStationsIs0 = true;
        } else {
            numberOfStationsIs0 = false;
        }

        if (planetType == numOfPlanetTypes + 1) {
            let var39 = Math.floor(Math.random() * 100.0);
            if (var39 < 25) {
                scenario = Math.floor(Math.random() * 5.0 + 1.0);
            } else if (var39 < 88) {
                scenario = Math.floor(Math.random() * 13.0 + 1.0);
            } else {
                scenario = Math.floor(Math.random() * numOfPlanetTypes + 1.0);
            }

            if (scenario == 2 && numOfPlanets == maxNumOfPlanets + 1 && Math.random() < 0.95 && numberOfPlanets < 4) {
                numberOfPlanets += 4;
            } else if (scenario == 2 && numOfPlanets == maxNumOfPlanets + 2 && Math.random() < 0.95 && numberOfPlanets < 10) {
                numberOfPlanets += 7;
            }

            if (scenario == 18 && numOfPlanets == maxNumOfPlanets + 1 && Math.random() < 0.9 && numberOfPlanets < 3) {
                numberOfPlanets += 2;
            } else if (scenario == 18 && numOfPlanets == maxNumOfPlanets + 2 && Math.random() < 0.9 && numberOfPlanets < 3) {
                numberOfPlanets += 2;
            }

            if (scenario == 1 && numOfPlanets == maxNumOfPlanets + 1 && Math.random() < 0.9 && numberOfPlanets < 7) {
                ++numberOfPlanets;
            } else if (scenario == 1 && numOfPlanets == maxNumOfPlanets + 2 && Math.random() < 0.9 && numberOfPlanets < 14) {
                ++numberOfPlanets;
            }
        } else if (tornamentmode == 0 || gameNumber == 0) {
            scenario = planetType;
        }

        h = -1;
        winningTeam = -1;
        let /* int */ var43;
        if (gameNumber == 0) {
            for (var43 = 0; var43 < numberOfStations; ++var43) {
                s[var43] = var43;
                topTeam = -1;
                k = -1;
                totalPower[var43] = 0;
                vengencekills[var43] = 0;
                strategykills[var43] = 0;
                tacticsKills[var43] = 0;
                bullykills[var43] = 0;
                opressionkills[var43] = 0;
                longshotkills[var43] = 0;
                closeshotkills[var43] = 0;
                playerTurn[var43] = 0;
                ownGoals[var43] = 0;
                suicides[var43] = 0;
                kills[var43] = 0;
                killedby[var43] = -1;
                shots[var43] = 0;
                survives[var43] = 0;
                playerData8[var43] = 0;
                playerData9[var43] = 0;
                playerData10[var43] = 0;
                playerData11[var43] = 0;
                playerData13[var43] = 0;
                playerShots[var43] = 0;
                playerData14[var43] = 0;
                playerData15[var43] = 0;
            }
        }

        if (showTitleScreen != 0) {
            nextGaussian = 3;
            randomStationType = 5;
            scenario = 9;
            numberOfPlanets = 4;
            currentNumberOfStations = 0;
            currentStationsPerPlayer = 1;
            numberOfTeams = 5;
            numberOfStations = numberOfTeams * currentStationsPerPlayer;
        }

        activePlayer = 0;

        for (var43 = 0; var43 < numberOfStations; ++var43) {
            currentStatus[var43] = 1;
        }

        a = 0;
        preferredLayoutSize = 0;

        for (let /* int */ var44 = 0; var44 < numberOfStations; ++var44) {
            teams[var44] = a;
            stations[var44] = preferredLayoutSize++;
            if (preferredLayoutSize >= currentStationsPerPlayer) {
                unused1[a] = var44;
                ++a;
                preferredLayoutSize = 0;
            }
        }

        if (numberOfStations == 2) {
            var1 = 450.0;
            var5 = 0.17;
        } else if (numberOfStations == 3) {
            var1 = 450.0;
            var5 = 0.1;
        } else if (numberOfStations == 4) {
            var1 = 300.0;
            var5 = 0.0625;
        } else if (numberOfStations == 5) {
            var1 = 250.0;
            var5 = 0.05;
        } else if (numberOfStations == 6) {
            var1 = 200.0;
            var5 = 0.0375;
        } else if (numberOfStations == 7) {
            var1 = 200.0;
            var5 = 0.0375;
        } else if (numberOfStations == 8) {
            var1 = 200.0;
            var5 = 0.0375;
        } else if (numberOfStations == 9) {
            var1 = 150.0;
            var5 = 0.025;
        } else if (numberOfStations == 10) {
            var1 = 150.0;
            var5 = 0.025;
        } else if (numberOfStations == 11) {
            var1 = 120.0;
            var5 = 0.0175;
        } else {
            var1 = 100.0;
            var5 = 0.0125;
        }

        for (let /* int */ var45 = 0; var45 < currentNumberOfStations; ++var45) {
            ais[var45] = 0;
        }

        for (let /* int */ var46 = currentNumberOfStations; var46 < numberOfStations; ++var46) {
            ais[var46] = nextGaussian;
        }

        let /* int */ var48;
        for (let /* int */ var47 = 0; var47 < numberOfStations; ++var47) {
            for (var48 = 0; var48 < numberOfStations; ++var48) {
                fI[var47][var48] = 0;
                jI[var47][var48] = 0;
            }
        }

        currentWinner = -2;
        drawing2 = 1;
        timeStep = 0.15;
        currentStep = 0;
        let var25 = Math.random();
        let var27 = Math.random();
        let var29 = Math.random();
        let var31 = Math.random();
        let var33 = Math.random();
        let var35 = Math.random();
        let var37 = Math.random();
        iZ = 0.2;
        EZ = Math.floor(20000.0 * Math.random());
        if (randomStationType == 1) {
            for (var48 = 0; var48 < SZ; ++var48) {
                KZ[var48] = Math.floor(canvasWidth * Math.random());
                LZ[var48] = Math.floor(canvasWidth * Math.random());
                MZ[var48] = Math.floor(resizeRatio * (6.0 * Math.random() * Math.random() * Math.random() + 1.4 * Math.random() + 1.4 * Math.random() + 2.0));
                WZ[var48] = [Math.floor(6.0 * Math.random() + 50.0 * Math.random()), Math.floor(2.0 * Math.random() + 6.0 * Math.random()), Math.floor(5.0 * Math.random() + 40.0 * Math.random())];
            }
        } else {
            for (var48 = 0; var48 < SZ; ++var48) {
                KZ[var48] = Math.floor(canvasWidth * Math.random());
                LZ[var48] = Math.floor(canvasWidth * Math.random());
                MZ[var48] = Math.floor(resizeRatio * (10.0 * Math.random() * Math.random() * Math.random() + 1.8 * Math.random() + 1.8 * Math.random() + 2.0));
                WZ[var48] = [Math.floor(14.0 * Math.random() + 95.0 * Math.random()), Math.floor(3.0 * Math.random() + 12.0 * Math.random()), Math.floor(10.0 * Math.random() + 80.0 * Math.random())];
            }
        }

        let var9 = 1.0;
        let var11 = 0.0;
        let var13 = 0.0;
        let var15 = 1.0;
        let var17 = 0.0;
        let var19 = 0.0;

        for (let i = 0; i < numberOfPlanets; ++i) {
            planetColours[i] = [150, 120, 80];
        }

        for (let i = 0; i < numberOfPlanets; ++i) {
            planetDoubleNumber[i] = 1.0;
        }

        // Generate planet data

        let /* int */ planetStartIndex = 0;
        let /* byte */  var41 = 1;
        let var7 = 400.0;
        let /* byte */  var42 = 1;
        let /* int */ var57 = 0;

        while (!negativePlanetsMaybe) {
            if (scenario == 1) {
                var9 = 0.4;
                var11 = 0.4;
                var13 = 0.1;
                var15 = 30.0;
                var17 = 30.0;
                var19 = 10.0;
                planetStartIndex = 0;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [150, 120, 80];
                }

                var41 = 1;
                var7 = 0.03;
                var42 = 1;
                if (numberOfPlanets > 10) {
                    numberOfPlanets = 10;
                }
            } else if (scenario == 2) {
                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 20.0;
                var17 = 5.0;
                var19 = 3.0;
                planetStartIndex = 0;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [120, 80, 10];
                }

                var7 = 0.05;
                var42 = 1;
            } else if (scenario == 3) {
                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 20.0;
                var17 = 5.0;
                var19 = 4.0;
                planetStartIndex = 1;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [150, 120, 80];
                }

                var41 = 1;
                var42 = 1;
                var7 = 0.08;
                planetColours[0] = [Math.floor(Math.random() * 30.0) + 205, Math.floor(Math.random() * 30.0) + 205, Math.floor(Math.random() * 190.0) + 15];
                planetGravityMaybe[0] = 0.015;
                planetX[0] = (0.1 * Math.random() + 0.1 * Math.random()) * resizedWidth + 0.4 * resizedWidth;
                planetY[0] = (0.1 * Math.random() + 0.1 * Math.random()) * resizedHeight + 0.4 * resizedHeight;
                planetWidthMaybe[0] = 80.0 * Math.random() + 80.0 * Math.random() + 80.0;
                resizedPlanetWidthMaybe[0] = Math.floor(resizeRatio * planetWidthMaybe[0]);
                if (resizedPlanetWidthMaybe[0] == 0) {
                    resizedPlanetWidthMaybe[0] = 1;
                }

                planetNumber[0] = planetWidthMaybe[0] * planetWidthMaybe[0] * planetGravityMaybe[0];
                drawingPlanetType[0] = 2;
                R[0] = 1;
            } else if (scenario == 4) {
                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 20.0;
                var17 = 5.0;
                var19 = 4.0;
                planetStartIndex = 2;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [120, 80, 10];
                }

                var41 = 1;
                var42 = 1;
                var7 = 0.08;
                planetColours[0] = [Math.floor(Math.random() * 30.0) + 205, Math.floor(Math.random() * 30.0) + 205, Math.floor(Math.random() * 190.0) + 15];
                planetGravityMaybe[0] = 0.01;
                planetX[0] = (0.3 * Math.random() + 0.3 * Math.random()) * resizedWidth + 0.2 * resizedWidth;
                planetY[0] = (0.3 * Math.random() + 0.3 * Math.random()) * resizedHeight + 0.2 * resizedHeight;
                planetWidthMaybe[0] = 80.0 * Math.random() + 80.0 * Math.random() + 40.0;
                resizedPlanetWidthMaybe[0] = Math.floor(resizeRatio * planetWidthMaybe[0]);
                if (resizedPlanetWidthMaybe[0] == 0) {
                    resizedPlanetWidthMaybe[0] = 1;
                }

                planetNumber[0] = planetWidthMaybe[0] * planetWidthMaybe[0] * planetGravityMaybe[0];
                drawingPlanetType[0] = 2;
                R[0] = 1;
                planetColours[1] = [Math.floor(Math.random() * 30.0) + 205, Math.floor(Math.random() * 30.0) + 205, Math.floor(Math.random() * 190.0) + 15];
                planetGravityMaybe[1] = 0.01;
                planetX[1] = (0.3 * Math.random() + 0.3 * Math.random()) * resizedWidth + 0.2 * resizedWidth;
                planetY[1] = (0.3 * Math.random() + 0.3 * Math.random()) * resizedHeight + 0.2 * resizedHeight;
                planetWidthMaybe[1] = 80.0 * Math.random() + 80.0 * Math.random() + 40.0;
                resizedPlanetWidthMaybe[1] = Math.floor(resizeRatio * planetWidthMaybe[1]);
                if (resizedPlanetWidthMaybe[1] == 0) {
                    resizedPlanetWidthMaybe[1] = 1;
                }

                planetNumber[1] = planetWidthMaybe[1] * planetWidthMaybe[1] * planetGravityMaybe[1];
                drawingPlanetType[1] = 2;
                R[1] = 1;
            } else if (scenario == 5) {
                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 6.0;
                var17 = 6.0;
                var19 = 3.0;
                planetStartIndex = 1;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [120, 100, 70];
                }

                var41 = 1;
                var7 = 0.04;
                var42 = 1;
                R[0] = 1;
                planetColours[0] = [Math.floor(Math.random() * 100.0) + 145, Math.floor(Math.random() * 125.0), Math.floor(Math.random() * 55.0)];
                planetGravityMaybe[0] = 0.01;
                planetX[0] = (0.1 * Math.random() + 0.1 * Math.random()) * resizedWidth + 0.4 * resizedWidth;
                planetY[0] = (0.1 * Math.random() + 0.1 * Math.random()) * resizedHeight + 0.4 * resizedHeight;
                planetWidthMaybe[0] = 80.0 * Math.random() + 80.0 * Math.random() + 40.0;
                resizedPlanetWidthMaybe[0] = Math.floor(resizeRatio * planetWidthMaybe[0]);
                if (resizedPlanetWidthMaybe[0] == 0) {
                    resizedPlanetWidthMaybe[0] = 1;
                }

                planetNumber[0] = planetWidthMaybe[0] * planetWidthMaybe[0] * planetGravityMaybe[0];
                drawingPlanetType[0] = 1;
            } else if (scenario == 6) {
                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 30.0;
                var17 = 5.0;
                var19 = 9.0;
                planetStartIndex = 1;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [120, 80, 10];
                }

                var41 = 1;
                var42 = 1;
                var7 = 0.05;
                planetColours[0] = [Math.floor(Math.random() * 10.0) + 245, Math.floor(Math.random() * 245.0 + 10.0), Math.floor(Math.random() * 45.0 + 0.0)];
                planetX[0] = (3.0 * Math.random() + 0.0 * Math.random()) * resizedWidth - resizedWidth;
                planetY[0] = (3.0 * Math.random() + 0.0 * Math.random()) * resizedHeight - resizedHeight;
                planetWidthMaybe[0] = (0.2 * Math.random() + 0.2 * Math.random()) * resizedHeight + 1.5 * resizedHeight;
                resizedPlanetWidthMaybe[0] = Math.floor(resizeRatio * planetWidthMaybe[0]);
                if (resizedPlanetWidthMaybe[0] == 0) {
                    resizedPlanetWidthMaybe[0] = 1;
                }

                planetNumber[0] = 4000.0;
                planetGravityMaybe[0] = planetNumber[0] / (planetWidthMaybe[0] * planetWidthMaybe[0]);
                drawingPlanetType[0] = 2;
                if (numberOfPlanets > 14) {
                    numberOfPlanets = 14;
                }

                R[0] = 1;
            } else if (scenario == 7) {
                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 10.0;
                var17 = 10.0;
                var19 = 9.0;
                planetStartIndex = 2;
                var3 = 100.0 / (numberOfPlanets + 0.001);

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [120, 80, 10];
                }

                var41 = 1;
                var42 = 1;
                var7 = 0.05;
                planetColours[0] = [Math.floor(Math.random() * 10.0) + 245, Math.floor(Math.random() * 245.0 + 0.0), Math.floor(Math.random() * 45.0 + 0.0)];
                planetX[0] = (3.0 * Math.random() + 0.0 * Math.random()) * resizedWidth - resizedWidth;
                planetY[0] = (3.0 * Math.random() + 0.0 * Math.random()) * resizedHeight - resizedHeight;
                planetWidthMaybe[0] = (0.2 * Math.random() + 0.2 * Math.random()) * resizedHeight + 1.5 * resizedHeight;
                resizedPlanetWidthMaybe[0] = Math.floor(resizeRatio * planetWidthMaybe[0]);
                if (resizedPlanetWidthMaybe[0] == 0) {
                    resizedPlanetWidthMaybe[0] = 1;
                }

                planetNumber[0] = 4000.0;
                planetGravityMaybe[0] = planetNumber[0] / (planetWidthMaybe[0] * planetWidthMaybe[0]);
                drawingPlanetType[0] = 2;
                R[0] = 1;
                planetColours[1] = [Math.floor(Math.random() * 10.0) + 245, Math.floor(Math.random() * 245.0 + 0.0), Math.floor(Math.random() * 45.0 + 0.0)];
                planetGravityMaybe[1] = planetGravityMaybe[0];
                planetX[1] = (3.0 * Math.random() + 0.0 * Math.random()) * resizedWidth - resizedWidth;
                planetY[1] = (3.0 * Math.random() + 0.0 * Math.random()) * resizedHeight - resizedHeight;
                planetWidthMaybe[1] = (0.2 * Math.random() + 0.2 * Math.random()) * resizedHeight + 1.5 * resizedHeight;
                resizedPlanetWidthMaybe[1] = Math.floor(resizeRatio * planetWidthMaybe[1]);
                if (resizedPlanetWidthMaybe[1] == 0) {
                    resizedPlanetWidthMaybe[1] = 1;
                }

                planetNumber[1] = planetWidthMaybe[1] * planetWidthMaybe[1] * planetGravityMaybe[1];
                drawingPlanetType[1] = 2;
                R[1] = 1;
                if (numberOfPlanets > 12) {
                    numberOfPlanets = 12;
                }
            } else if (scenario == 8) {
                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 10.0;
                var17 = 10.0;
                var19 = 9.0;
                planetStartIndex = 2;
                var3 = 100.0 / (numberOfPlanets + 0.001);

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [120, 80, 10];
                }

                var41 = 1;
                var42 = 1;
                var7 = 0.05;
                planetColours[0] = [Math.floor(Math.random() * 10.0) + 245, Math.floor(Math.random() * 245.0 + 0.0), Math.floor(Math.random() * 45.0 + 0.0)];
                planetX[0] = (3.0 * Math.random() + 0.0 * Math.random()) * resizedWidth - resizedWidth;
                planetY[0] = (3.0 * Math.random() + 0.0 * Math.random()) * resizedHeight - resizedHeight;
                planetWidthMaybe[0] = (0.2 * Math.random() + 0.2 * Math.random()) * resizedHeight + 1.5 * resizedHeight;
                resizedPlanetWidthMaybe[0] = Math.floor(resizeRatio * planetWidthMaybe[0]);
                if (resizedPlanetWidthMaybe[0] == 0) {
                    resizedPlanetWidthMaybe[0] = 1;
                }

                planetNumber[0] = 4000.0;
                planetGravityMaybe[0] = planetNumber[0] / (planetWidthMaybe[0] * planetWidthMaybe[0]);
                drawingPlanetType[0] = 2;
                R[0] = 1;
                planetColours[1] = [Math.floor(Math.random() * 30.0) + 205, Math.floor(Math.random() * 30.0) + 205, Math.floor(Math.random() * 190.0) + 15];
                planetGravityMaybe[1] = 0.02;
                planetX[1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                planetY[1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                planetWidthMaybe[1] = 80.0 * Math.random() + 80.0 * Math.random() + 50.0;
                resizedPlanetWidthMaybe[1] = Math.floor(resizeRatio * planetWidthMaybe[1]);
                if (resizedPlanetWidthMaybe[1] == 0) {
                    resizedPlanetWidthMaybe[1] = 1;
                }

                planetNumber[1] = planetWidthMaybe[1] * planetWidthMaybe[1] * planetGravityMaybe[1];
                drawingPlanetType[1] = 2;
                R[1] = 1;
                if (numberOfPlanets > 13) {
                    numberOfPlanets = 13;
                }
            } else if (scenario == 9) {
                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 20.0;
                var17 = 5.0;
                var19 = 4.0;
                planetStartIndex = 1;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [120, 80, 10];
                }

                var41 = 1;
                var42 = 1;
                var7 = 0.065;
                planetColours[0] = [Math.floor(Math.random() * 10.0) + 245, Math.floor(Math.random() * 115.0), Math.floor(Math.random() * 21.0)];
                planetGravityMaybe[0] = 0.015;
                planetX[0] = (0.1 * Math.random() + 0.1 * Math.random()) * resizedWidth + 0.4 * resizedWidth;
                planetY[0] = (0.1 * Math.random() + 0.1 * Math.random()) * resizedHeight + 0.4 * resizedHeight;
                planetWidthMaybe[0] = 80.0 * Math.random() + 80.0 * Math.random() + 140.0;
                resizedPlanetWidthMaybe[0] = Math.floor(resizeRatio * planetWidthMaybe[0]);
                if (resizedPlanetWidthMaybe[0] == 0) {
                    resizedPlanetWidthMaybe[0] = 1;
                }

                planetNumber[0] = planetWidthMaybe[0] * planetWidthMaybe[0] * planetGravityMaybe[0];
                drawingPlanetType[0] = 2;
                R[0] = 1;
            } else if (scenario == 10) {
                var9 = 1.2;
                var11 = 0.0;
                var13 = -0.1;
                var15 = 70.0;
                var17 = 70.0;
                var19 = 30.0;
                planetStartIndex = 0;
                var41 = 2;
                var42 = 1;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [Math.floor(Math.random() * 30.0) + 215, Math.floor(Math.random() * 30.0) + 205, Math.floor(Math.random() * 190.0) + 15];
                }

                var7 = 0.015;
                if (numberOfPlanets > 8) {
                    numberOfPlanets = 8;
                }
            } else if (scenario == 11) {
                var9 = 1.2;
                var11 = 0.0;
                var13 = -0.1;
                var15 = 70.0;
                var17 = 70.0;
                var19 = 30.0;
                planetStartIndex = Math.floor(numberOfPlanets * (0.6 * Math.random() + 0.6 * Math.random()));
                if (planetStartIndex > 7) {
                    planetStartIndex = 7;
                }

                if (planetStartIndex == 0) {
                    planetStartIndex = 1;
                }

                for (let i = 0; i < planetStartIndex; ++i) {
                    R[i] = 1;
                    planetColours[i] = [Math.floor(Math.random() * 30.0) + 215, Math.floor(Math.random() * 30.0) + 205, Math.floor(Math.random() * 190.0) + 15];
                    planetX[i] = (var9 * Math.random() + var11 * Math.random()) * resizedWidth + var13 * resizedWidth;
                    planetY[i] = (var9 * Math.random() + var11 * Math.random()) * resizedHeight + var13 * resizedHeight;
                    planetWidthMaybe[i] = var15 * Math.random() + var17 * Math.random() + var19;
                    resizedPlanetWidthMaybe[i] = Math.floor(resizeRatio * planetWidthMaybe[i]);
                    if (resizedPlanetWidthMaybe[i] == 0) {
                        resizedPlanetWidthMaybe[i] = 1;
                    }

                    planetGravityMaybe[i] = 0.015;
                    planetNumber[i] = planetWidthMaybe[i] * planetWidthMaybe[i] * planetGravityMaybe[i];
                    drawingPlanetType[i] = 2;
                }

                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 20.0;
                var17 = 5.0;
                var19 = 4.0;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [120, 80, 10];
                }

                var41 = 1;
                var42 = 1;
                var7 = 0.1;
            } else if (scenario == 12) {
                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 5.0;
                var17 = 5.0;
                var19 = 3.0;
                planetStartIndex = 1;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [160, 100, 70];
                }

                var7 = 0.5;
                var41 = 1;
                var42 = 1;
                R[0] = 1;
                planetColours[0] = [255, 255, 255];
                planetGravityMaybe[0] = 0.014;
                planetX[0] = (0.1 * Math.random() + 0.1 * Math.random()) * resizedWidth + 0.4 * resizedWidth;
                planetY[0] = (0.1 * Math.random() + 0.1 * Math.random()) * resizedHeight + 0.4 * resizedHeight;
                planetWidthMaybe[0] = 80.0 * Math.random() + 80.0 * Math.random() + 140.5;
                resizedPlanetWidthMaybe[0] = Math.floor(Math.random() * 3.0 + 7.0);
                planetNumber[0] = planetWidthMaybe[0] * planetWidthMaybe[0] * planetGravityMaybe[0];
                drawingPlanetType[0] = 2;
            } else if (scenario == 13) {
                if (var25 < 0.75 && numberOfPlanets > 1) {
                    var9 = 1.0;
                    var11 = 0.0;
                    var13 = 0.0;
                    var15 = 20.0;
                    var17 = 20.0;
                    var19 = 3.0;
                    planetStartIndex = 2;

                    for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                        planetColours[i] = [150, 120, 80];
                    }

                    var7 = 0.03;
                    var41 = 1;
                    var42 = 1;
                    R[0] = -1;
                    planetColours[0] = [255, 55, 255];
                    planetGravityMaybe[0] = 0.08;
                    planetX[0] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[0] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[0] = 10.0 * Math.random() + 10.0 * Math.random() + 10.0;
                    resizedPlanetWidthMaybe[0] = Math.floor(2.0 * planetWidthMaybe[0] * resizeRatio);
                    planetNumber[0] = planetWidthMaybe[0] * planetWidthMaybe[0] * planetGravityMaybe[0];
                    drawingPlanetType[0] = 3;
                    R[1] = 0;
                    planetColours[1] = [255, 55, 255];
                    planetGravityMaybe[1] = 0.08;
                    planetX[1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[1] = planetWidthMaybe[0];
                    resizedPlanetWidthMaybe[1] = Math.floor(2.0 * planetWidthMaybe[1] * resizeRatio);
                    planetNumber[1] = planetNumber[0];
                    drawingPlanetType[1] = 3;
                } else if (var25 < 0.9 && numberOfPlanets > 2) {
                    var9 = 1.0;
                    var11 = 0.0;
                    var13 = 0.0;
                    var15 = 20.0;
                    var17 = 20.0;
                    var19 = 3.0;
                    planetStartIndex = 3;

                    for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                        planetColours[i] = [150, 120, 80];
                    }

                    var7 = 0.03;
                    var41 = 1;
                    var42 = 1;
                    R[0] = -2;
                    planetColours[0] = [55, 55, 255];
                    planetGravityMaybe[0] = 0.08;
                    planetX[0] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[0] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[0] = 10.0 * Math.random() + 10.0 * Math.random() + 10.0;
                    resizedPlanetWidthMaybe[0] = Math.floor(2.0 * planetWidthMaybe[0] * resizeRatio);
                    planetNumber[0] = planetWidthMaybe[0] * planetWidthMaybe[0] * planetGravityMaybe[0];
                    drawingPlanetType[0] = 3;
                    R[1] = 0;
                    planetColours[1] = [55, 55, 255];
                    planetGravityMaybe[1] = 0.08;
                    planetX[1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[1] = planetWidthMaybe[0];
                    resizedPlanetWidthMaybe[1] = Math.floor(2.0 * planetWidthMaybe[1] * resizeRatio);
                    planetNumber[1] = planetNumber[0];
                    drawingPlanetType[1] = 3;
                    R[2] = -1;
                    planetColours[2] = [55, 55, 255];
                    planetGravityMaybe[2] = 0.08;
                    planetX[2] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[2] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[2] = planetWidthMaybe[0];
                    resizedPlanetWidthMaybe[2] = Math.floor(2.0 * planetWidthMaybe[2] * resizeRatio);
                    planetNumber[2] = planetNumber[0];
                    drawingPlanetType[2] = 3;
                } else if (var25 < 0.96) {
                    var9 = 1.0;
                    var11 = 0.0;
                    var13 = 0.0;
                    var15 = 18.0;
                    var17 = 18.0;
                    var19 = 3.0;
                    planetStartIndex = 1;

                    for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                        planetColours[i] = [150, 120, 80];
                    }

                    var7 = 0.03;
                    var41 = 1;
                    var42 = 1;
                    R[0] = 3;
                    planetColours[0] = [55, 255, 55];
                    planetGravityMaybe[0] = 0.08;
                    planetX[0] = (0.2 * Math.random() + 0.2 * Math.random()) * resizedWidth + 0.3 * resizedWidth;
                    planetY[0] = (0.2 * Math.random() + 0.2 * Math.random()) * resizedHeight + 0.3 * resizedHeight;
                    planetWidthMaybe[0] = 15.0 * Math.random() + 15.0 * Math.random() + 15.0;
                    resizedPlanetWidthMaybe[0] = Math.floor(2.0 * planetWidthMaybe[0] * resizeRatio);
                    planetNumber[0] = planetWidthMaybe[0] * planetWidthMaybe[0] * planetGravityMaybe[0];
                    drawingPlanetType[0] = 3;
                } else {
                    var9 = 1.0;
                    var11 = 0.0;
                    var13 = 0.0;
                    var15 = 18.0;
                    var17 = 18.0;
                    var19 = 3.0;
                    planetStartIndex = 1;

                    for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                        planetColours[i] = [120, 80, 10];
                    }

                    var7 = 0.03;
                    var41 = 1;
                    var42 = 1;
                    R[0] = 0;
                    planetColours[0] = [255, 255, 55];
                    planetGravityMaybe[0] = 0.08;
                    planetX[0] = (0.2 * Math.random() + 0.2 * Math.random()) * resizedWidth + 0.3 * resizedWidth;
                    planetY[0] = (0.2 * Math.random() + 0.2 * Math.random()) * resizedHeight + 0.3 * resizedHeight;
                    planetWidthMaybe[0] = 15.0 * Math.random() + 15.0 * Math.random() + 15.0;
                    resizedPlanetWidthMaybe[0] = Math.floor(2.0 * planetWidthMaybe[0] * resizeRatio);
                    planetNumber[0] = planetWidthMaybe[0] * planetWidthMaybe[0] * planetGravityMaybe[0];
                    drawingPlanetType[0] = 3;
                }
            } else if (scenario == 14) {
                var9 = 0.9;
                var11 = 0.0;
                var13 = 0.1;
                var15 = 3.0;
                var17 = 3.0;
                var19 = 4.0;
                planetStartIndex = 0;
                var7 = 3.0;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [255, 255, 255];
                }

                var41 = 2;
                var42 = 1;
            } else if (scenario == 15) {
                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 6.0;
                var17 = 6.0;
                var19 = 1.0;
                planetStartIndex = 1;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [160, 100, 70];
                }

                var41 = 1;
                var7 = 0.5;
                var42 = 1;
                R[0] = 2;
                planetColours[0] = [0, 0, 0];
                planetGravityMaybe[0] = 0.02;
                planetX[0] = (0.1 * Math.random() + 0.1 * Math.random()) * resizedWidth + 0.4 * resizedWidth;
                planetY[0] = (0.1 * Math.random() + 0.1 * Math.random()) * resizedHeight + 0.4 * resizedHeight;
                planetWidthMaybe[0] = 80.0 * Math.random() + 80.0 * Math.random() + 140.0;
                resizedPlanetWidthMaybe[0] = 3;
                planetNumber[0] = planetWidthMaybe[0] * planetWidthMaybe[0] * planetGravityMaybe[0];
                drawingPlanetType[0] = 0;
            } else if (scenario == 16) {
                var9 = 0.9;
                var11 = 0.0;
                var13 = 0.1;
                var15 = 0.0;
                var17 = 0.0;
                var19 = 3.0;
                planetStartIndex = 0;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [0, 0, 0];
                }

                var41 = 0;
                var7 = 50.0;
                var42 = 2;
            } else if (scenario == 17) {
                if (var25 < 0.4 && numberOfPlanets > 1) {
                    var9 = 0.9;
                    var11 = 0.0;
                    var13 = 0.1;
                    var15 = 0.0;
                    var17 = 0.0;
                    var19 = 5.0;
                    planetStartIndex = numberOfPlanets;

                    for (let i = 1; i < numberOfPlanets; i += 2) {
                        R[i] = -(i - 1);
                        planetColours[i] = [255, 55, 255];
                        planetGravityMaybe[i] = 0.08;
                        planetX[i] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedWidth + 0.05 * resizedWidth;
                        planetY[i] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedHeight + 0.05 * resizedHeight;
                        planetWidthMaybe[i] = 10.0 * Math.random() + 10.0 * Math.random() + 10.0;
                        resizedPlanetWidthMaybe[i] = Math.floor(2.0 * planetWidthMaybe[i] * resizeRatio);
                        planetNumber[i] = planetWidthMaybe[i] * planetWidthMaybe[i] * planetGravityMaybe[i];
                        drawingPlanetType[i] = 3;
                        R[i - 1] = -i;
                        planetColours[i - 1] = [255, 55, 255];
                        planetGravityMaybe[i - 1] = 0.08;
                        planetX[i - 1] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedWidth + 0.05 * resizedWidth;
                        planetY[i - 1] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedHeight + 0.05 * resizedHeight;
                        planetWidthMaybe[i - 1] = planetWidthMaybe[i];
                        resizedPlanetWidthMaybe[i - 1] = Math.floor(2.0 * planetWidthMaybe[i] * resizeRatio);
                        planetNumber[i - 1] = planetNumber[i];
                        drawingPlanetType[i - 1] = 3;
                        planetStartIndex = i;
                    }

                    if (planetStartIndex != numberOfPlanets - 1) {
                        --numberOfPlanets;
                    }

                    planetStartIndex = numberOfPlanets;
                } else if (var25 < 0.7) {
                    var9 = 0.9;
                    var11 = 0.0;
                    var13 = 0.1;
                    var15 = 0.0;
                    var17 = 0.0;
                    var19 = 5.0;
                    planetStartIndex = numberOfPlanets;

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (i == 0) {
                            R[i] = -(numberOfPlanets - 1);
                        } else {
                            R[i] = -(i - 1);
                        }

                        planetColours[i] = [55, 55, 255];
                        planetGravityMaybe[i] = 0.08;
                        planetX[i] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedWidth + 0.05 * resizedWidth;
                        planetY[i] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedHeight + 0.05 * resizedHeight;
                        planetWidthMaybe[i] = 10.0 * Math.random() + 10.0 * Math.random() + 10.0;
                        resizedPlanetWidthMaybe[i] = Math.floor(2.0 * planetWidthMaybe[i] * resizeRatio);
                        planetNumber[i] = planetWidthMaybe[i] * planetWidthMaybe[i] * planetGravityMaybe[i];
                        drawingPlanetType[i] = 3;
                    }

                    planetStartIndex = numberOfPlanets;
                } else if (!(var25 < 0.85)) {
                    if (var25 < 0.9) {
                        var9 = 0.9;
                        var11 = 0.0;
                        var13 = 0.1;
                        var15 = 0.0;
                        var17 = 0.0;
                        var19 = 5.0;
                        planetStartIndex = numberOfPlanets;

                        for (let i = 0; i < numberOfPlanets; ++i) {
                            R[i] = 3;
                            planetColours[i] = [55, 255, 55];
                            planetGravityMaybe[i] = 0.08;
                            planetX[i] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedWidth + 0.05 * resizedWidth;
                            planetY[i] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedHeight + 0.05 * resizedHeight;
                            planetWidthMaybe[i] = 10.0 * Math.random() + 10.0 * Math.random() + 15.0;
                            resizedPlanetWidthMaybe[i] = Math.floor(2.0 * planetWidthMaybe[i] * resizeRatio);
                            planetNumber[i] = planetWidthMaybe[i] * planetWidthMaybe[i] * planetGravityMaybe[i];
                            drawingPlanetType[i] = 3;
                        }
                    } else if (var25 < 0.95) {
                        var9 = 0.9;
                        var11 = 0.0;
                        var13 = 0.1;
                        var15 = 0.0;
                        var17 = 0.0;
                        var19 = 5.0;
                        planetStartIndex = numberOfPlanets;

                        for (let i = 0; i < numberOfPlanets; ++i) {
                            R[i] = 4;
                            planetColours[i] = [155, 155, 155];
                            planetGravityMaybe[i] = 0.08;
                            planetX[i] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedWidth + 0.05 * resizedWidth;
                            planetY[i] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedHeight + 0.05 * resizedHeight;
                            planetWidthMaybe[i] = 10.0 * Math.random() + 10.0 * Math.random() + 10.0;
                            resizedPlanetWidthMaybe[i] = Math.floor(2.0 * planetWidthMaybe[i] * resizeRatio);
                            planetNumber[i] = planetWidthMaybe[i] * planetWidthMaybe[i] * planetGravityMaybe[i];
                            drawingPlanetType[i] = 3;
                        }
                    } else {
                        var9 = 0.9;
                        var11 = 0.0;
                        var13 = 0.1;
                        var15 = 0.0;
                        var17 = 0.0;
                        var19 = 5.0;
                        planetStartIndex = numberOfPlanets;

                        for (let i = 0; i < numberOfPlanets; ++i) {
                            R[i] = -i;
                            planetColours[i] = [255, 255, 55];
                            planetGravityMaybe[i] = 0.08;
                            planetX[i] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedWidth + 0.05 * resizedWidth;
                            planetY[i] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedHeight + 0.05 * resizedHeight;
                            planetWidthMaybe[i] = 10.0 * Math.random() + 10.0 * Math.random() + 15.0;
                            resizedPlanetWidthMaybe[i] = Math.floor(2.0 * planetWidthMaybe[i] * resizeRatio);
                            planetNumber[i] = planetWidthMaybe[i] * planetWidthMaybe[i] * planetGravityMaybe[i];
                            drawingPlanetType[i] = 3;
                        }
                    }
                } else {
                    var9 = 0.9;
                    var11 = 0.0;
                    var13 = 0.1;
                    var15 = 0.0;
                    var17 = 0.0;
                    var19 = 5.0;
                    planetStartIndex = numberOfPlanets;

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        R[i] = -((Math.random() * (numberOfPlanets - 1)));
                        planetColours[i] = [255, 55, 55];
                        planetGravityMaybe[i] = 0.08;
                        planetX[i] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedWidth + 0.05 * resizedWidth;
                        planetY[i] = (0.7 * Math.random() + 0.2 * Math.random()) * resizedHeight + 0.05 * resizedHeight;
                        planetWidthMaybe[i] = 10.0 * Math.random() + 10.0 * Math.random() + 10.0;
                        resizedPlanetWidthMaybe[i] = Math.floor(2.0 * planetWidthMaybe[i] * resizeRatio);
                        planetNumber[i] = planetWidthMaybe[i] * planetWidthMaybe[i] * planetGravityMaybe[i];
                        drawingPlanetType[i] = 3;
                    }

                    planetStartIndex = numberOfPlanets;
                }
            } else if (scenario == 18) {
                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 20.0;
                var17 = 20.0;
                var19 = 9.0;
                planetStartIndex = 2;
                var3 = 100.0 / (numberOfPlanets + 0.001);
                var41 = 1;
                var42 = 1;
                var7 = 0.07;
                planetColours[0] = [255, 55, 255];
                planetX[0] = (3.0 * Math.random() + 0.0 * Math.random()) * resizedWidth - resizedWidth;
                planetY[0] = (3.0 * Math.random() + 0.0 * Math.random()) * resizedHeight - resizedHeight;
                planetWidthMaybe[0] = (0.2 * Math.random() + 0.2 * Math.random()) * resizedHeight + 1.5 * resizedHeight;
                resizedPlanetWidthMaybe[0] = Math.floor(resizeRatio * planetWidthMaybe[0]);
                if (resizedPlanetWidthMaybe[0] == 0) {
                    resizedPlanetWidthMaybe[0] = 1;
                }

                planetNumber[0] = 4000.0;
                planetGravityMaybe[0] = planetNumber[0] / (planetWidthMaybe[0] * planetWidthMaybe[0]);
                drawingPlanetType[0] = 3;
                R[0] = -1;
                resizedPlanetWidthMaybe[0] = Math.floor(resizeRatio * 50.0);
                planetColours[1] = [255, 55, 255];
                planetGravityMaybe[1] = planetGravityMaybe[0];
                planetX[1] = resizedWidth - planetX[0];
                planetY[1] = resizedHeight - planetY[0];
                planetWidthMaybe[1] = planetWidthMaybe[0];
                resizedPlanetWidthMaybe[1] = Math.floor(resizeRatio * planetWidthMaybe[1]);
                if (resizedPlanetWidthMaybe[1] == 0) {
                    resizedPlanetWidthMaybe[1] = 1;
                }

                planetNumber[1] = planetWidthMaybe[1] * planetWidthMaybe[1] * planetGravityMaybe[1];
                drawingPlanetType[1] = 3;
                R[1] = 0;
                resizedPlanetWidthMaybe[1] = Math.floor(resizeRatio * 50.0);
                if (numberOfPlanets != 1 && !(var25 < 0.1)) {
                    if (var25 < 0.2) {
                        planetColours[0] = [55, 255, 55];
                        planetColours[1] = [55, 255, 55];
                        R[0] = 3;
                        R[1] = 3;
                    }
                } else {
                    R[0] = 3;
                    planetStartIndex = 1;
                    planetColours[0] = [55, 255, 55];

                    for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                        planetColours[i] = [120, 80, 10];
                    }
                }

                if (numberOfPlanets > 12) {
                    numberOfPlanets = 12;
                }
            } else if (scenario == 19) {
                var9 = 1.0;
                var11 = 0.0;
                var13 = 0.0;
                var15 = 16.0;
                var17 = 16.0;
                var19 = 1.0;
                planetStartIndex = 1;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [160, 100, 70];
                }

                var41 = 1;
                var7 = 0.06;
                var42 = 1;
                planetDoubleNumber[0] = 15.0;
                R[0] = 2;
                planetColours[0] = [255, 255, 255];
                planetGravityMaybe[0] = 0.02;
                planetX[0] = (0.1 * Math.random() + 0.1 * Math.random()) * resizedWidth + 0.4 * resizedWidth;
                planetY[0] = (0.1 * Math.random() + 0.1 * Math.random()) * resizedHeight + 0.4 * resizedHeight;
                planetWidthMaybe[0] = 80.0 * Math.random() + 80.0 * Math.random() + 140.0;
                resizedPlanetWidthMaybe[0] = 6;
                planetNumber[0] = -20.0;
                drawingPlanetType[0] = 2;
            } else if (scenario != 20) {
                if (scenario == 21) {
                    var9 = 0.9;
                    var11 = 0.0;
                    var13 = 0.1;
                    var15 = 0.0;
                    var17 = 0.0;
                    var19 = 5.0;
                    planetStartIndex = numberOfPlanets;

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (Math.random() < 0.5) {
                            planetGravityMaybe[i] = 6.0 * Math.random();
                        } else {
                            planetGravityMaybe[i] = -5.0 * Math.random();
                        }

                        if (planetGravityMaybe[i] < 0.0) {
                            planetColours[i] = [255, 255 + Math.floor(50.0 * planetGravityMaybe[i]), 0];
                        }

                        if (planetGravityMaybe[i] > 0.0) {
                            planetColours[i] = [Math.floor(255.0 - 40.0 * planetGravityMaybe[i]), 255, 0];
                        }

                        if (var25 < 0.8) {
                            R[i] = 2;
                        } else {
                            R[i] = 4;
                        }

                        planetX[i] = (var9 * Math.random() + var11 * Math.random()) * resizedWidth + var13 * resizedWidth;
                        planetY[i] = (var9 * Math.random() + var11 * Math.random()) * resizedHeight + var13 * resizedHeight;
                        planetWidthMaybe[i] = var15 * Math.random() + var17 * Math.random() + var19;
                        if (var25 < 0.8) {
                            resizedPlanetWidthMaybe[i] = Math.floor(resizeRatio * planetWidthMaybe[i]);
                        } else {
                            resizedPlanetWidthMaybe[i] = Math.floor(2.0 * planetWidthMaybe[i]);
                        }

                        if (resizedPlanetWidthMaybe[i] == 0) {
                            resizedPlanetWidthMaybe[i] = 1;
                        }

                        planetNumber[i] = planetWidthMaybe[i] * planetWidthMaybe[i] * planetGravityMaybe[i];
                        if (var25 < 0.8) {
                            drawingPlanetType[i] = 2;
                        } else {
                            drawingPlanetType[i] = 3;
                        }
                    }
                }
            } else {
                var9 = 0.9;
                var11 = 0.0;
                var13 = 0.1;
                var15 = 3.0;
                var17 = 3.0;
                var19 = 4.0;
                planetStartIndex = 0;
                var7 = -0.2;

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetColours[i] = [255, 255, 255];
                }

                for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                    planetDoubleNumber[i] = 15.0;
                }

                var41 = 2;
                var42 = 1;
            }

            negativePlanetsMaybe = true;

            for (let i = planetStartIndex; i < numberOfPlanets; ++i) {
                planetGravityMaybe[i] = var7;
                planetX[i] = (var9 * Math.random() + var11 * Math.random()) * resizedWidth + var13 * resizedWidth;
                planetY[i] = (var9 * Math.random() + var11 * Math.random()) * resizedHeight + var13 * resizedHeight;
                planetWidthMaybe[i] = var15 * Math.random() + var17 * Math.random() + var19;
                resizedPlanetWidthMaybe[i] = Math.floor(resizeRatio * planetWidthMaybe[i]);
                if (resizedPlanetWidthMaybe[i] == 0) {
                    resizedPlanetWidthMaybe[i] = 1;
                }

                planetNumber[i] = planetWidthMaybe[i] * planetWidthMaybe[i] * planetGravityMaybe[i];
                drawingPlanetType[i] = var41;
                R[i] = var42;
            }

            if (var27 < 0.1) {
                if (var29 < 0.25 && numberOfPlanets > 2) {
                    planetStartIndex = Math.floor(var31 * (numberOfPlanets - 2)) + 1;
                    R[planetStartIndex] = -(planetStartIndex + 1);
                    planetColours[planetStartIndex] = [255, 55, 255];
                    planetGravityMaybe[planetStartIndex] = 0.08;
                    planetX[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex] = 10.0 * Math.random() + 10.0 * Math.random() + 10.0;
                    resizedPlanetWidthMaybe[planetStartIndex] = Math.floor(2.0 * planetWidthMaybe[planetStartIndex] * resizeRatio);
                    planetNumber[planetStartIndex] = planetWidthMaybe[planetStartIndex] * planetWidthMaybe[planetStartIndex] * planetGravityMaybe[planetStartIndex];
                    drawingPlanetType[planetStartIndex] = 3;
                    R[planetStartIndex + 1] = -planetStartIndex;
                    planetColours[planetStartIndex + 1] = [255, 55, 255];
                    planetGravityMaybe[planetStartIndex + 1] = 0.08;
                    planetX[planetStartIndex + 1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex + 1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex + 1] = planetWidthMaybe[planetStartIndex];
                    resizedPlanetWidthMaybe[planetStartIndex + 1] = Math.floor(2.0 * planetWidthMaybe[planetStartIndex] * resizeRatio);
                    planetNumber[planetStartIndex + 1] = planetNumber[planetStartIndex];
                    drawingPlanetType[planetStartIndex + 1] = 3;
                } else if (var29 < 0.5 && numberOfPlanets > 3) {
                    planetStartIndex = Math.floor(var31 * (numberOfPlanets - 3)) + 1;
                    R[planetStartIndex] = -(planetStartIndex + 1);
                    planetColours[planetStartIndex] = [55, 55, 255];
                    planetGravityMaybe[planetStartIndex] = 0.08;
                    planetX[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex] = 10.0 * Math.random() + 10.0 * Math.random() + 10.0;
                    resizedPlanetWidthMaybe[planetStartIndex] = Math.floor(2.0 * planetWidthMaybe[planetStartIndex] * resizeRatio);
                    planetNumber[planetStartIndex] = planetWidthMaybe[planetStartIndex] * planetWidthMaybe[planetStartIndex] * planetGravityMaybe[planetStartIndex];
                    drawingPlanetType[planetStartIndex] = 3;
                    R[planetStartIndex + 1] = -(planetStartIndex + 2);
                    planetColours[planetStartIndex + 1] = [55, 55, 255];
                    planetGravityMaybe[planetStartIndex + 1] = 0.08;
                    planetX[planetStartIndex + 1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex + 1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex + 1] = planetWidthMaybe[planetStartIndex];
                    resizedPlanetWidthMaybe[planetStartIndex + 1] = Math.floor(2.0 * planetWidthMaybe[planetStartIndex + 1] * resizeRatio);
                    planetNumber[planetStartIndex + 1] = planetNumber[planetStartIndex];
                    drawingPlanetType[planetStartIndex + 1] = 3;
                    R[planetStartIndex + 2] = -planetStartIndex;
                    planetColours[planetStartIndex + 2] = [55, 55, 255];
                    planetGravityMaybe[planetStartIndex + 2] = 0.08;
                    planetX[planetStartIndex + 2] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex + 2] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex + 2] = planetWidthMaybe[planetStartIndex];
                    resizedPlanetWidthMaybe[planetStartIndex + 2] = Math.floor(2.0 * planetWidthMaybe[planetStartIndex + 2] * resizeRatio);
                    planetNumber[planetStartIndex + 2] = planetNumber[planetStartIndex];
                    drawingPlanetType[planetStartIndex + 2] = 3;
                } else if (var29 < 0.6 && numberOfPlanets > 1) {
                    planetStartIndex = Math.floor(var31 * (numberOfPlanets - 1)) + 1;
                    R[planetStartIndex] = 3;
                    planetColours[planetStartIndex] = [55, 255, 55];
                    planetGravityMaybe[planetStartIndex] = 0.08;
                    planetX[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex] = 15.0 * Math.random() + 15.0 * Math.random() + 15.0;
                    resizedPlanetWidthMaybe[planetStartIndex] = Math.floor(2.0 * planetWidthMaybe[planetStartIndex] * resizeRatio);
                    planetNumber[planetStartIndex] = planetWidthMaybe[planetStartIndex] * planetWidthMaybe[planetStartIndex] * planetGravityMaybe[planetStartIndex];
                    drawingPlanetType[planetStartIndex] = 3;
                } else if (var29 < 0.9 && numberOfPlanets > 1) {
                    planetStartIndex = Math.floor(var31 * (numberOfPlanets - 1)) + 1;
                    R[planetStartIndex] = 1;
                    planetColours[planetStartIndex] = [255, 255, 255];
                    planetGravityMaybe[planetStartIndex] = 3.0;
                    planetX[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex] = 3.0 * Math.random() + 3.0 * Math.random() + 4.0;
                    resizedPlanetWidthMaybe[planetStartIndex] = Math.floor(resizeRatio * planetWidthMaybe[planetStartIndex]);
                    planetNumber[planetStartIndex] = planetWidthMaybe[planetStartIndex] * planetWidthMaybe[planetStartIndex] * planetGravityMaybe[planetStartIndex];
                    drawingPlanetType[planetStartIndex] = 2;

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (R[i] == -planetStartIndex) {
                            R[i] = -i;
                        }
                    }
                } else if (numberOfPlanets > 1) {
                    planetStartIndex = Math.floor(var31 * (numberOfPlanets - 1)) + 1;
                    R[planetStartIndex] = 2;
                    planetColours[planetStartIndex] = [0, 0, 0];
                    planetGravityMaybe[planetStartIndex] = 50.0;
                    planetX[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex] = 3.0;
                    resizedPlanetWidthMaybe[planetStartIndex] = Math.floor(resizeRatio * planetWidthMaybe[planetStartIndex]);
                    planetNumber[planetStartIndex] = planetWidthMaybe[planetStartIndex] * planetWidthMaybe[planetStartIndex] * planetGravityMaybe[planetStartIndex];
                    drawingPlanetType[planetStartIndex] = 0;

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (R[i] == -planetStartIndex) {
                            R[i] = -i;
                        }
                    }
                }
            }

            if (var27 < 0.1 && var33 < 0.35) {
                if (var35 < 0.25 && numberOfPlanets > 2) {
                    planetStartIndex = Math.floor(var37 * (numberOfPlanets - 2)) + 1;
                    R[planetStartIndex] = -(planetStartIndex + 1);
                    planetColours[planetStartIndex] = [255, 55, 255];
                    planetGravityMaybe[planetStartIndex] = 0.08;
                    planetX[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex] = 10.0 * Math.random() + 10.0 * Math.random() + 10.0;
                    resizedPlanetWidthMaybe[planetStartIndex] = Math.floor(2.0 * planetWidthMaybe[planetStartIndex] * resizeRatio);
                    planetNumber[planetStartIndex] = planetWidthMaybe[planetStartIndex] * planetWidthMaybe[planetStartIndex] * planetGravityMaybe[planetStartIndex];
                    drawingPlanetType[planetStartIndex] = 3;
                    R[planetStartIndex + 1] = -planetStartIndex;
                    planetColours[planetStartIndex + 1] = [255, 55, 255];
                    planetGravityMaybe[planetStartIndex + 1] = 0.08;
                    planetX[planetStartIndex + 1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex + 1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex + 1] = planetWidthMaybe[planetStartIndex];
                    resizedPlanetWidthMaybe[planetStartIndex + 1] = Math.floor(2.0 * planetWidthMaybe[planetStartIndex] * resizeRatio);
                    planetNumber[planetStartIndex + 1] = planetNumber[planetStartIndex];
                    drawingPlanetType[planetStartIndex + 1] = 3;
                } else if (var35 < 0.5 && numberOfPlanets > 3) {
                    planetStartIndex = Math.floor(var37 * (numberOfPlanets - 3)) + 1;
                    R[planetStartIndex] = -(planetStartIndex + 1);
                    planetColours[planetStartIndex] = [55, 55, 255];
                    planetGravityMaybe[planetStartIndex] = 0.08;
                    planetX[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex] = 10.0 * Math.random() + 10.0 * Math.random() + 10.0;
                    resizedPlanetWidthMaybe[planetStartIndex] = Math.floor(2.0 * planetWidthMaybe[planetStartIndex] * resizeRatio);
                    planetNumber[planetStartIndex] = planetWidthMaybe[planetStartIndex] * planetWidthMaybe[planetStartIndex] * planetGravityMaybe[planetStartIndex];
                    drawingPlanetType[planetStartIndex] = 3;
                    R[planetStartIndex + 1] = -(planetStartIndex + 2);
                    planetColours[planetStartIndex + 1] = [55, 55, 255];
                    planetGravityMaybe[planetStartIndex + 1] = 0.08;
                    planetX[planetStartIndex + 1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex + 1] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex + 1] = planetWidthMaybe[planetStartIndex];
                    resizedPlanetWidthMaybe[planetStartIndex + 1] = Math.floor(2.0 * planetWidthMaybe[planetStartIndex + 1] * resizeRatio);
                    planetNumber[planetStartIndex + 1] = planetNumber[planetStartIndex];
                    drawingPlanetType[planetStartIndex + 1] = 3;
                    R[planetStartIndex + 2] = -planetStartIndex;
                    planetColours[planetStartIndex + 2] = [55, 55, 255];
                    planetGravityMaybe[planetStartIndex + 2] = 0.08;
                    planetX[planetStartIndex + 2] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex + 2] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex + 2] = planetWidthMaybe[planetStartIndex];
                    resizedPlanetWidthMaybe[planetStartIndex + 2] = Math.floor(2.0 * planetWidthMaybe[planetStartIndex + 2] * resizeRatio);
                    planetNumber[planetStartIndex + 2] = planetNumber[planetStartIndex];
                    drawingPlanetType[planetStartIndex + 2] = 3;
                } else if (var35 < 0.7 && numberOfPlanets > 1) {
                    planetStartIndex = Math.floor(var37 * (numberOfPlanets - 1)) + 1;
                    R[planetStartIndex] = 3;
                    planetColours[planetStartIndex] = [55, 255, 55];
                    planetGravityMaybe[planetStartIndex] = 0.08;
                    planetX[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex] = 15.0 * Math.random() + 15.0 * Math.random() + 15.0;
                    resizedPlanetWidthMaybe[planetStartIndex] = Math.floor(2.0 * planetWidthMaybe[planetStartIndex] * resizeRatio);
                    planetNumber[planetStartIndex] = planetWidthMaybe[planetStartIndex] * planetWidthMaybe[planetStartIndex] * planetGravityMaybe[planetStartIndex];
                    drawingPlanetType[planetStartIndex] = 3;
                } else if (var35 < 0.93 && numberOfPlanets > 1) {
                    planetStartIndex = Math.floor(var37 * (numberOfPlanets - 1)) + 1;
                    R[planetStartIndex] = 1;
                    planetColours[planetStartIndex] = [255, 255, 255];
                    planetGravityMaybe[planetStartIndex] = 3.0;
                    planetX[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex] = 3.0 * Math.random() + 3.0 * Math.random() + 4.0;
                    resizedPlanetWidthMaybe[planetStartIndex] = Math.floor(resizeRatio * planetWidthMaybe[planetStartIndex]);
                    planetNumber[planetStartIndex] = planetWidthMaybe[planetStartIndex] * planetWidthMaybe[planetStartIndex] * planetGravityMaybe[planetStartIndex];
                    drawingPlanetType[planetStartIndex] = 2;

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (R[i] == -planetStartIndex) {
                            R[i] = -i;
                        }
                    }
                } else if (numberOfPlanets > 1) {
                    planetStartIndex = Math.floor(var37 * (numberOfPlanets - 1)) + 1;
                    R[planetStartIndex] = 2;
                    planetColours[planetStartIndex] = [0, 0, 0];
                    planetGravityMaybe[planetStartIndex] = 50.0;
                    planetX[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedWidth + 0.1 * resizedWidth;
                    planetY[planetStartIndex] = (0.4 * Math.random() + 0.4 * Math.random()) * resizedHeight + 0.1 * resizedHeight;
                    planetWidthMaybe[planetStartIndex] = 3.0;
                    resizedPlanetWidthMaybe[planetStartIndex] = Math.floor(resizeRatio * planetWidthMaybe[planetStartIndex]);
                    planetNumber[planetStartIndex] = planetWidthMaybe[planetStartIndex] * planetWidthMaybe[planetStartIndex] * planetGravityMaybe[planetStartIndex];
                    drawingPlanetType[planetStartIndex] = 0;

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (R[i] == -planetStartIndex) {
                            R[i] = -i;
                        }
                    }
                }
            }

            for (let i = 0; i < numberOfPlanets; ++i) {
                for (let j = 0; j < numberOfPlanets; ++j) {
                    if (j != i && (planetX[i] - planetX[j]) * (planetX[i] - planetX[j]) + (planetY[i] - planetY[j]) * (planetY[i] - planetY[j]) < (var3 + planetWidthMaybe[i] + planetWidthMaybe[j]) * (var3 + planetWidthMaybe[i] + planetWidthMaybe[j])) {
                        negativePlanetsMaybe = false;
                    }
                }
            }

            consumedAreaAmtMaybe = 0;

            for (let i = 0; i < 20; ++i) {
                for (let j = 0; j < 20; ++j) {
                    consumedAreaMaybe = true;

                    for (let k = 0; k < numberOfPlanets; ++k) {
                        if ((i * resizedWidth / 20.0 - planetX[k]) * (i * resizedWidth / 20.0 - planetX[k]) + (j * resizedHeight / 20.0 - planetY[k]) * (j * resizedHeight / 20.0 - planetY[k]) < planetWidthMaybe[k] * planetWidthMaybe[k]) {
                            consumedAreaMaybe = false;
                        }
                    }

                    if (consumedAreaMaybe) {
                        ++consumedAreaAmtMaybe;
                    }
                }
            }

            if (consumedAreaAmtMaybe < 80) {
                negativePlanetsMaybe = false;
            }

            // if (MathIEEEremainder(var57, 400.0) == 0.0) {
            //sleep(100);
            // }

            ++var57;
            if (var57 > 1000) {
                --numberOfPlanets;
                var57 = 0;
            }

            if (numberOfPlanets < 0) {
                negativePlanetsMaybe = true;
            }
        }

        freeArea = consumedAreaAmtMaybe / 400.0;
        var57 = 0;
        negativePlanetsMaybe = false;

        while (true) {
            do {
                if (negativePlanetsMaybe) {
                    if (scenario == 12) {
                        planetWidthMaybe[0] = resizedPlanetWidthMaybe[0];
                    }

                    if (scenario == 15) {
                        planetWidthMaybe[0] = resizedPlanetWidthMaybe[0];
                    }

                    if (scenario == 19) {
                        planetWidthMaybe[0] = resizedPlanetWidthMaybe[0];
                    }

                    angleSlider.value = 360 - currentAngle[activePlayer];
                    powerSlider.value = currentPower[activePlayer];
                    totalMass = 0.0;

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        totalMass += planetNumber[i];
                    }

                    addAdjustmentListener();

                    for (let i = 0; i < numberOfStations; ++i) {
                        currentStatus[i] = 3;
                        hyperspaceCount[i] = 13;
                    }

                    currentMode = 0;
                    isInHyperspaceMaybe = 1;
                    ++gameNumber;
                    return;
                }

                negativePlanetsMaybe = true;

                for (let i = 0; i < numberOfStations; ++i) {
                    i[i] = -resizedWidth;
                    z[i] = -resizedHeight;
                    stationX[i] = (Math.floor((0.8 * Math.random() + 0.075 * Math.random()) * resizedWidth + 0.075 * resizedWidth));
                    stationY[i] = (Math.floor((0.8 * Math.random() + 0.075 * Math.random()) * resizedHeight + 0.075 * resizedHeight));
                    currentStatus[i] = 1;
                    if (randomStationType == 1) {
                        c[i] = 5.0;
                    }

                    if (randomStationType == 2) {
                        c[i] = 8.0;
                    }

                    if (randomStationType == 3) {
                        c[i] = 10.0;
                    }

                    if (randomStationType == 4) {
                        c[i] = 12.0;
                    }

                    if (randomStationType == 5) {
                        c[i] = 16.0;
                    }

                    if (randomStationType == 6) {
                        c[i] = 24.0;
                    }

                    stationRadius[i] = Math.floor(c[i] * resizeRatio);
                    if (stationRadius[i] == 0) {
                        stationRadius[i] = 1;
                    }

                    f[i] = 3 * stationRadius[i];
                    if (f[i] < sin) {
                        f[i] = 30;
                    }

                    j[i] = Math.floor(1.2 * c[i] * resizeRatio);
                    if (j[i] < 10) {
                        j[i] = 10;
                    }

                    currentPower[i] = 1;
                    currentAngle[i] = 180;
                    lastAngle[i] = currentAngle[i];
                    lastPower[i] = currentPower[i];
                    if (teams[i] == 0) {
                        teamColours[i] = [0, 220, 0];
                    }

                    if (teams[i] == 1) {
                        teamColours[i] = [0, 195, 195];
                    }

                    if (teams[i] == 2) {
                        teamColours[i] = [255, 255, 0];
                    }

                    if (teams[i] == 3) {
                        teamColours[i] = [255, 10, 10];
                    }

                    if (teams[i] == 4) {
                        teamColours[i] = [225, 0, 225];
                    }

                    if (teams[i] == 5) {
                        teamColours[i] = [0, 0, 250];
                    }

                    if (teams[i] == 6) {
                        teamColours[i] = [255, 162, 0];
                    }

                    if (teams[i] == 7) {
                        teamColours[i] = [155, 155, 155];
                    }

                    if (teams[i] == 8) {
                        teamColours[i] = [242, 242, 242];
                    }

                    if (teams[i] == 9) {
                        teamColours[i] = [88, 88, 88];
                    }

                    if (teams[i] == 10) {
                        teamColours[i] = [255, 155, 155];
                    }

                    if (teams[i] == 11) {
                        teamColours[i] = [205, 95, 0];
                    }

                    if (teams[i] == 12) {
                        teamColours[i] = [0, 115, 115];
                    }

                    teamColoursColour[teams[i]] = teamColours[i];
                    if (randomStationType == 1) {
                        tailCircleRadius[i] = 1.0;
                    }

                    if (randomStationType == 2) {
                        tailCircleRadius[i] = 1.2;
                    }

                    if (randomStationType == 3) {
                        tailCircleRadius[i] = 1.5;
                    }

                    if (randomStationType == 4) {
                        tailCircleRadius[i] = 2.0;
                    }

                    if (randomStationType == 5) {
                        tailCircleRadius[i] = 2.6;
                    }

                    if (randomStationType == 6) {
                        tailCircleRadius[i] = 3.4;
                    }

                    resizedTailCircleRadius[i] = Math.floor(tailCircleRadius[i] * resizeRatio);
                    if (resizedTailCircleRadius[i] < 1) {
                        resizedTailCircleRadius[i] = 1;
                    }

                    somePowerTimesSin[i] = 0.0;
                    somePowerTimesCos[i] = 0.0;
                    smallX[i] = 0.0;
                    smallY[i] = 0.0;
                    someYval1[i] = 0.0;
                    someXval1[i] = 0.0;
                    pathl[i] = 0;
                    teleports[i] = 0;
                    someYval2[i] = 0.0;
                    someXval2[i] = 0.0;
                    shotStatus[i] = 0;
                    currentHyperspace[i] = 0;
                }

                for (let i = 0; i < numberOfStations; ++i) {
                    for (let j = 0; j < numberOfStations; ++j) {
                        if (j != i && ((stationX[i] - stationX[j]) * (stationX[i] - stationX[j]) + (stationY[i] - stationY[j]) * (stationY[i] - stationY[j]) < var1 * var1 && teams[i] != teams[j] || (stationX[i] - stationX[j]) * (stationX[i] - stationX[j]) + (stationY[i] - stationY[j]) * (stationY[i] - stationY[j]) < var1 * var1 * 0.25)) {
                            if (negativePlanetsMaybe) {
                                var1 -= var5;
                            }

                            negativePlanetsMaybe = false;
                            if (var1 < 60.0) {
                                var1 = 60.0;
                            }
                        }
                    }
                }

                for (let i = 0; i < numberOfStations; ++i) {
                    for (let j = 0; j < numberOfPlanets; ++j) {
                        if ((stationX[i] - planetX[j]) * (stationX[i] - planetX[j]) + (stationY[i] - planetY[j]) * (stationY[i] - planetY[j]) < (c[i] + planetWidthMaybe[j]) * (c[i] + planetWidthMaybe[j])) {
                            negativePlanetsMaybe = false;
                        }
                    }
                }

                // if (MathIEEEremainder(var57, 800.0) == 0.0) {
                //sleep(100);
                // }

                ++var57;
            } while (var57 <= 4000);

            // aZ = -var1;

            for (let i = 0; i < numberOfStations; ++i) {
                currentHyperspace[i] = 1;
            }

            addActionListener();

            for (let i = 0; i < numberOfStations; ++i) {
                currentStatus[i] = 1;
                hyperspaceCount[i] = 0;
            }

            negativePlanetsMaybe = true;
        }
    } catch (e) {
        console.error(e);
    }
}

function handleMouseEvent(e) {
    if (!isMouseDown) return;

    if (currentWinner != -2 && currentMode == 0 && tornamentmode == 1 && gameNumber != 0) {
        somethingLikeStarted2 = 1;
    }

    if (isDebug && isExtraDebug) {
        stationX[currentStation] = e.offsetX / resizeRatio;
        stationY[currentStation] = e.offsetY / resizeRatio;
    } else {
        if (currentMode == 0 && ais[activePlayer] == 0 && isInHyperspaceMaybe == 1 && activePlayer < numberOfStations) {
            let insideX = e.offsetX / resizeRatio - stationX[activePlayer];
            let insideY = e.offsetY / resizeRatio - stationY[activePlayer];
            let var12 = 1.0;
            if (insideX < 0.0) {
                var12 = -1.0;
            }

            let calculatedAngle = (-(Math.floor(180.0 * Math.atan(insideY / insideX) / Math.PI)) + 180 - Math.floor(var12 * 90.0));
            let var8 = Math.sqrt(insideX * insideX + insideY * insideY) * resizeRatio;
            if (var8 < 1.2 * f[activePlayer] && var8 > stationRadius[activePlayer]) {
                currentAngle[activePlayer] = Math.floor(calculatedAngle);
                angleSlider.value = 360 - currentAngle[activePlayer];
                let calculatedPower = (var8 - j[activePlayer]) / (f[activePlayer] - j[activePlayer]);
                if (calculatedPower < 0.0) {
                    calculatedPower = 0.0;
                }

                if (calculatedPower > 1.0) {
                    calculatedPower = 1.0;
                }

                currentPower[activePlayer] = Math.floor(800.0 * calculatedPower) + 1;
                powerSlider.value = currentPower[activePlayer];
            }
        }

    }
}

function keyPressed(e) {
    let /* int */ keyPressed = e.keyCode;
    keyDown = e.keyCode;
    if (currentMode == 0 && ais[activePlayer] == 0 && isInHyperspaceMaybe == 1 && activePlayer < numberOfStations) {
        switch (keyPressed) {
            case 74: // j
                currentPower[activePlayer] += 10;
                if (currentPower[activePlayer] > 800) {
                    currentPower[activePlayer] = 800;
                }

                powerSlider.value = currentPower[activePlayer];
                break;
            case 75: // k
                newValue = currentPower[activePlayer]++;
                if (currentPower[activePlayer] > 800) {
                    currentPower[activePlayer] = 800;
                }

                powerSlider.value = currentPower[activePlayer];
            case 76: // l
            default:
                break;
            case 77:  // m
                newValue = currentPower[activePlayer]--;
                if (currentPower[activePlayer] < 0) {
                    currentPower[activePlayer] = 0;
                }

                powerSlider.value = currentPower[activePlayer];
                break;
            case 78: // n
                currentPower[activePlayer] -= 10;
                if (currentPower[activePlayer] < 0) {
                    currentPower[activePlayer] = 0;
                }

                powerSlider.value = currentPower[activePlayer];
        }

        switch (keyPressed) {
            case 65: // a
                currentAngle[activePlayer] += 5;
                if (currentAngle[activePlayer] > 359) {
                    currentAngle[activePlayer] -= 360;
                }

                angleSlider.value = (360 - currentAngle[activePlayer]);
                break;
            case 83: // s
                currentAngle[activePlayer] -= 5;
                if (currentAngle[activePlayer] < 0) {
                    currentAngle[activePlayer] += 360;
                }

                angleSlider.value = (360 - currentAngle[activePlayer]);
                break;
            case 88: // x
                newValue = currentAngle[activePlayer]--;
                if (currentAngle[activePlayer] < 0) {
                    currentAngle[activePlayer] = 359;
                }

                angleSlider.value = (360 - currentAngle[activePlayer]);
                break;
            case 90: // z
                newValue = currentAngle[activePlayer]++;
                if (currentAngle[activePlayer] > 359) {
                    currentAngle[activePlayer] = 0;
                }

                angleSlider.value = (360 - currentAngle[activePlayer]);
        }

        switch (keyPressed) {
            case 13 /*10*/: // enter
                if (showTitleScreen == 0 && currentWinner == -2 && isInHyperspaceMaybe == 1) {
                    ++activePlayer;

                    while (activePlayer < numberOfStations && currentStatus[activePlayer] != 1) {
                        ++activePlayer;
                    }

                    while (ais[activePlayer] > 0 && activePlayer < numberOfStations) {
                        I();
                        ++activePlayer;
                    }

                    if (activePlayer < numberOfStations) {
                        angleSlider.value = (360 - currentAngle[activePlayer]);
                        powerSlider.value = currentPower[activePlayer];

                        //sleep(100L);
                    }
                }
                break;
            case 72: // h
                if (isInHyperspaceMaybe == 1) {
                    if (currentHyperspace[activePlayer] == 0) {
                        currentHyperspace[activePlayer] = 1;
                    } else {
                        currentHyperspace[activePlayer] = 0;
                    }

                    //sleep(100L);
                }
        }
    } else {
        switch (keyPressed) {
            case 79: // o
                slowMo = true;
                break;
            case 80: // p
                if (paused) {
                    paused = false;
                } else if (!paused) {
                    paused = true;
                }
        }
    }

    switch (keyPressed) {
        case 69: // e
            ++currentStation;
            if (currentStation >= maxPlayers) {
                currentStation = 0;
                return;
            }
            break;
        case 81: // q
            isDebug = true;
            return;
        case 82: // r
            if (isDebug && isExtraDebug) {
                if (currentStatus[currentStation] == 1) {
                    currentStatus[currentStation] = 0;
                } else {
                    currentStatus[currentStation] = 1;
                }

                if (currentWinner != -2) {
                    currentWinner = -2;
                    return;
                }
            }
            break;
        case 84: // t
            if (isDebug && isExtraDebug) {
                newValue = ais[currentStation]++;
                if (ais[currentStation] > numOfCpuTypes) {
                    ais[currentStation] = 0;
                    return;
                }
            }
            break;
        case 87: // w
            isExtraDebug = true;
            return;
    }

}

function keyReleased(e) {
    keyDown = 0;
    let /* int */ keyPressed = e.keyCode;
    switch (keyPressed) {
        case 81: // q
            isDebug = false;
            return;
        case 87: // w
            isExtraDebug = false;
            return;
        default:
    }
}

function adjustmentValueChanged(e) {
    if (e.target == angleSlider && e.target == 2 && currentAngle[activePlayer] >= 359 && isInHyperspaceMaybe == 1) {
        currentAngle[activePlayer] = 0;
        angleSlider.value = (360 - currentAngle[activePlayer]);
    } else if (e.target == angleSlider && e.target == 1 && currentAngle[activePlayer] <= 0 && isInHyperspaceMaybe == 1) {
        currentAngle[activePlayer] = 359;
        angleSlider.value = (360 - currentAngle[activePlayer]);
    } else if (e.target == angleSlider && isInHyperspaceMaybe == 1) {
        currentAngle[activePlayer] = 360 - angleSlider.value;
    } else if (e.target == powerSlider && isInHyperspaceMaybe == 1) {
        currentPower[activePlayer] = powerSlider.value;
    }
}

function run() {

    try {
        currentTimeForDelay = Date.now();

        if (!J) {
            console.log("How do we get here?");
            //sleep(500);
        } else if (paused && !slowMo) {
            paint();
            //sleep(100);
        } else {
            if (somethingLikeStarted2 == 1) {
                dataIsReset = 0;

                //sleep(100);

                generateRandomData();

                //sleep(50);

                dataIsReset = 1;
                somethingLikeStarted2 = 0;
            }

            checkActive = 0;
            if (currentMode == 1) {
                for (let i = 0; i < numberOfStations; ++i) {
                    if (currentStatus[i] == 3) {
                        checkActive = 1;
                    }

                    if (shotStatus[i] != 0) {
                        checkActive = 1;
                        if (shotStatus[i] == 1) {
                            // Fired
                            for (let j = 0; j < numberOfPlanets; ++j) {
                                let var11 = 1.0;
                                let someXCalc = planetX[j] - smallX[i];
                                let someYCalc = planetY[j] - smallY[i];
                                let someTanCalc = Math.atan(someYCalc / someXCalc);
                                if (someXCalc < 0.0) {
                                    var11 = -1.0;
                                }

                                let sumXsAndYs = someXCalc * someXCalc + someYCalc * someYCalc;
                                if (sumXsAndYs < planetWidthMaybe[j] * planetWidthMaybe[j]) {
                                    if (R[j] == 1) {
                                        shotStatus[i] = 2;
                                    } else if (R[j] == 2) {
                                        shotStatus[i] = 2;
                                        shotExp[i] = 30.0;
                                    } else if (R[j] == 3) {
                                        smallX[i] = Math.random() * resizedWidth;
                                        smallY[i] = Math.random() * resizedHeight;
                                        nTeleports[i][teleports[i]] = pathl[i];
                                        if (teleports[i] >= n) {
                                            shotStatus[i] = 2;
                                        } else {
                                            var10002 = teleports[i]++;
                                        }
                                    } else {
                                        let var9;
                                        let /* int */ var29;
                                        if (R[j] == 4) {
                                            if (var11 < 0.0) {
                                                var9 = someTanCalc + Math.PI;
                                            } else {
                                                var9 = someTanCalc;
                                            }

                                            var29 = Math.floor(numberOfPlanets * Math.random());
                                            smallX[i] = planetX[var29] + Math.cos(var9) * (planetWidthMaybe[var29] + 0.5);
                                            smallY[i] = planetY[var29] + Math.sin(var9) * (planetWidthMaybe[var29] + 0.5);
                                            nTeleports[i][teleports[i]] = pathl[i];
                                            if (teleports[i] >= n) {
                                                shotStatus[i] = 2;
                                            } else {
                                                var10002 = teleports[i]++;
                                            }
                                        } else if (R[j] <= 0) {
                                            if (var11 < 0.0) {
                                                var9 = someTanCalc + Math.PI;
                                            } else {
                                                var9 = someTanCalc;
                                            }

                                            var29 = -R[j];
                                            smallX[i] = planetX[var29] + Math.cos(var9) * (planetWidthMaybe[var29] + 0.5);
                                            smallY[i] = planetY[var29] + Math.sin(var9) * (planetWidthMaybe[var29] + 0.5);
                                            nTeleports[i][teleports[i]] = pathl[i];
                                            if (teleports[i] >= n) {
                                                shotStatus[i] = 2;
                                            } else {
                                                var10002 = teleports[i]++;
                                            }
                                        }
                                    }
                                } else {
                                    let var16 = var11 * iZ * planetNumber[j] / sumXsAndYs;
                                    let /* double[] */ var10000 = somePowerTimesSin;
                                    var10000[i] += Math.cos(someTanCalc) * var16 * timeStep;
                                    var10000 = somePowerTimesCos;
                                    var10000[i] += Math.sin(someTanCalc) * var16 * timeStep;
                                }
                            }
                        }
                    }
                }

                // Check for a hit

                for (let i = 0; i < numberOfStations; ++i) {
                    for (let j = 0; j < numberOfStations; ++j) {
                        if (currentStatus[j] == 1 && (smallX[i] - stationX[j]) * (smallX[i] - stationX[j]) + (smallY[i] - stationY[j]) * (smallY[i] - stationY[j]) < c[j] * c[j]) {
                            // Hit!

                            if (shotStatus[i] == 1) {
                                if (teams[i] == teams[j]) {
                                    // Suicide

                                    if (i == j) {
                                        var10002 = suicides[i]++;
                                        var10002 = playerData11[teams[i]]++;
                                    } else {
                                        var10002 = ownGoals[i]++;
                                        var10002 = playerData10[teams[i]]++;
                                    }

                                    var10002 = playerData8[teams[i]]--;
                                } else {
                                    // Kill

                                    var10002 = kills[i]++;
                                    var10002 = playerData13[teams[i]]++;
                                    var10002 = playerData8[teams[i]]++;
                                    if (teams[j] == topTeam) {
                                        var10002 = strategykills[i]++;
                                    }

                                    if (teams[j] == k) {
                                        var10002 = opressionkills[i]++;
                                    }

                                    if (teams[j] == winningTeam) {
                                        var10002 = tacticsKills[i]++;
                                    }

                                    if (teams[j] == h) {
                                        var10002 = bullykills[i]++;
                                    }

                                    let var7 = Math.sqrt((stationX[j] - stationX[i]) * (stationX[j] - stationX[i]) + (stationY[j] - stationY[i]) * (stationY[j] - stationY[i]));
                                    if (var7 > resizedWidth * q) {
                                        var10002 = longshotkills[i]++;
                                    }

                                    if (var7 < resizedWidth * r) {
                                        var10002 = closeshotkills[i]++;
                                    }
                                }

                                if (j == killedby[i]) {
                                    var10002 = vengencekills[i]++;
                                }
                            }

                            killedby[j] = i;
                            shotStatus[i] = 2;
                            currentStatus[j] = 2;
                        }
                    }
                }

                for (let i = 0; i < numberOfStations; ++i) {
                    if (shotStatus[i] == 1) {
                        smallX[i] += somePowerTimesSin[i] * timeStep;
                        smallY[i] += somePowerTimesCos[i] * timeStep;
                    }

                    if (smallX[i] < negativeResizedWidth || smallX[i] > doubleResizedWidth || smallY[i] < negativeResizedWidth2 || smallY[i] > resizedHeightPlusWidth) {
                        shotStatus[i] = 0;
                    }
                }

                ++currentStep;
                if (currentStep > prtLower * shwEvery) {
                    for (let i = 0; i < numberOfStations; ++i) {
                        if (shotStatus[i] == 1) {
                            shotStatus[i] = 2;
                        }
                    }
                }

                // Hyperspace?

                if (checkActive == 0 && hyperSpacing == 0) {
                    if (scenario == 21) {
                        for (let i = 0; i < numberOfStations; ++i) {
                            if (currentHyperspace[i] == 0) {
                                currentHyperspace[i] = 1;
                            } else {
                                currentHyperspace[i] = 0;
                            }
                        }
                    }

                    addActionListener();
                    hyperSpacing = 1;
                } else if (checkActive == 0) {
                    addAdjustmentListener();
                    if (currentWinner > -2 && showTitleScreen != 0) {
                        generateRandomData();

                        //sleep(2000);
                    }
                }

                // if (MathIEEEremainder(currentStep, shwEvery) == 0.0) {
                ++prtUpper;

                for (let i = 0; i < numberOfStations; ++i) {
                    if (shotStatus[i] == 1 || shotStatus[i] == 2) {
                        if (pathl[i] < prtLower + 499) {
                            shotTailX[i][pathl[i]] = Math.floor(resizeRatio * smallX[i]);
                            shotTailY[i][pathl[i]] = Math.floor(resizeRatio * smallY[i]);
                            var10002 = pathl[i]++;
                        }

                        someXval4[i] = someXval3[i];
                        someYval4[i] = someYval3[i];
                        someXval3[i] = someXval2[i];
                        someYval3[i] = someYval2[i];
                        someXval2[i] = someXval1[i];
                        someYval2[i] = someYval1[i];
                        someXval1[i] = smallX[i];
                        someYval1[i] = smallY[i];
                    }

                    if (shotStatus[i] == 2) {
                        shotExp[i] += 0.1;
                        if (shotExp[i] > 100.0) {
                            shotExp[i] = 0.0;
                            shotStatus[i] = 0;
                        }
                    }

                    if (currentStatus[i] == 2) {
                        currentExplosion[i] += 0.15;
                        if (currentExplosion[i] > 60.0) {
                            currentExplosion[i] = 0.0;
                            currentStatus[i] = 0;
                        }
                    }
                }

                // if (MathIEEEremainder(currentStep, (shwEvery * everyTen)) == 0.0) {
                currentTimeForDelay += 40;
                delaytime = currentTimeForDelay - Date.now();
                finishedDrawing = 0;
                // startsAt15 = 0;
                paint();
                //sleep(Math.max(15, setLayout));
                currentTimeForDelay = Date.now();

                slowMo = false;
                // }
                // }
            } else if (currentMode == 0) {
                //sleep(20);
                ++random;
                if (numberOfStationsIs0 && currentWinner != -2 && random > 500 && tornamentmode == 1 && gameNumber != 0) {
                    somethingLikeStarted2 = 1;
                }

                if (ais[activePlayer] > 0 && activePlayer < numberOfStations) {
                    I();
                    ++activePlayer;
                }

                if (activePlayer >= numberOfStations && currentWinner == -2) {
                    //sleep(100);
                    isInHyperspaceMaybe = 0;
                    shoot();

                    // for (var18 = 0; var18 < numberOfStations; ++var18) {
                    // }
                }

                paint();
            }
        }
        window.requestAnimationFrame(run);
        // }
    } catch (e) {
        console.error(e);
    }
}

function I() {
    try {
        let /* boolean */  var1 = false;
        let /* boolean */  var2 = false;
        let /* boolean */  var3 = false;
        let /* boolean */  var4 = false;
        let var21 = 0.0;
        let var23 = 1.0;
        let var25 = 0.0;
        let /* byte */  var32 = 0;
        let /* byte */  var33 = 1;
        let /* byte */  var34 = 20;
        let /* short */ var35 = 400;
        if (currentStatus[activePlayer] == 1 && currentWinner == -2) {
            if (currentTurn == 1) {
                if (ais[activePlayer] == 3) {
                    var34 = 40;
                    var35 = 200;
                    var33 = 2;
                    var32 = 0;
                }

                if (ais[activePlayer] == 4) {
                    var34 = 20;
                    var35 = 400;
                    var33 = 5;
                    var32 = 0;
                }

                if (ais[activePlayer] == 5) {
                    var34 = 5;
                    var35 = 2000;
                    var33 = 20;
                    var32 = 1;
                }
            } else if (currentTurn == 2) {
                if (ais[activePlayer] == 3) {
                    var34 = 20;
                    var35 = 400;
                    var33 = 3;
                    var32 = 0;
                }

                if (ais[activePlayer] == 4) {
                    var34 = 10;
                    var35 = 800;
                    var33 = 8;
                    var32 = 0;
                }

                if (ais[activePlayer] == 5) {
                    var34 = 5;
                    var35 = 2000;
                    var33 = 30;
                    var32 = 1;
                }
            } else if (currentTurn == 3) {
                if (ais[activePlayer] == 3) {
                    var34 = 20;
                    var35 = 400;
                    var33 = 4;
                    var32 = 0;
                }

                if (ais[activePlayer] == 4) {
                    var34 = 10;
                    var35 = 800;
                    var33 = 13;
                    var32 = 1;
                }

                if (ais[activePlayer] == 5) {
                    var34 = 5;
                    var35 = 2000;
                    var33 = 40;
                    var32 = 1;
                }
            } else if (currentTurn < 8) {
                if (ais[activePlayer] == 3) {
                    var34 = 20;
                    var35 = 400;
                    var33 = 5;
                    var32 = 0;
                }

                if (ais[activePlayer] == 4) {
                    var34 = 10;
                    var35 = 800;
                    var33 = 17;
                    var32 = 1;
                }

                if (ais[activePlayer] == 5) {
                    var34 = 5;
                    var35 = 2000;
                    var33 = 40;
                    var32 = 1;
                }
            } else {
                if (ais[activePlayer] == 3) {
                    var34 = 10;
                    var35 = 800;
                    var33 = 8;
                    var32 = 0;
                }

                if (ais[activePlayer] == 4) {
                    var34 = 10;
                    var35 = 800;
                    var33 = 25;
                    var32 = 1;
                }

                if (ais[activePlayer] == 5) {
                    var34 = 5;
                    var35 = 2000;
                    var33 = 50;
                    var32 = 1;
                }
            }

            let /* int */ var38 = Math.floor(360.0 * Math.random());
            let /* int */ var39 = Math.floor(800.0 * Math.random() + 200.0);
            let /* int */ var28 = Math.floor(Math.random() * numberOfStations);
            let /* int */ var29 = 1;
            let /* int */ var30;
            let /* boolean */  var31;
            if (ais[activePlayer] == 4 && Math.random() < 0.5) {
                var31 = true;
                var30 = 1;
                var25 = 80.0;

                for (var21 = 0.0; var31 && var30 < 100; ++var30) {
                    for (var29 = 1; (teams[var28] == teams[activePlayer] || currentStatus[var28] == 0) && var29 < 500; ++var29) {
                        var28 = Math.floor(Math.random() * numberOfStations);
                    }

                    var21 = (stationX[var28] - stationX[activePlayer]) * (stationX[var28] - stationX[activePlayer]) + (stationY[var28] - stationY[activePlayer]) * (stationY[var28] - stationY[activePlayer]);
                    if (var21 < var25 * var25) {
                        var31 = false;
                    } else {
                        var25 *= 1.5;
                        var31 = true;
                        var28 = activePlayer;
                    }
                }
            }

            if (ais[activePlayer] == 5 && Math.random() < 0.85) {
                var31 = true;
                var30 = 1;
                var25 = 80.0;

                for (var21 = 0.0; var31 && var30 < 100; ++var30) {
                    var29 = 1;

                    for (var23 = 1.0; (teams[var28] == teams[activePlayer] || currentStatus[var28] == 0) && var29 < 500; ++var29) {
                        var28 = Math.floor(Math.random() * numberOfStations);
                    }

                    var21 = (stationX[var28] - stationX[activePlayer]) * (stationX[var28] - stationX[activePlayer]) + (stationY[var28] - stationY[activePlayer]) * (stationY[var28] - stationY[activePlayer]);
                    if (teams[var28] == topTeam) {
                        var23 = 1.5;
                    } else if (teams[var28] == k) {
                        var23 = 0.5;
                    } else {
                        var23 = 1.0;
                    }

                    if (teams[var28] == winningTeam) {
                        var23 *= 1.5;
                    } else if (teams[var28] == h) {
                        var23 *= 0.5;
                    }

                    if (var21 < var25 * var25 * var23) {
                        var31 = false;
                    } else {
                        var25 *= 1.5;
                        var31 = true;
                        var28 = activePlayer;
                    }

                    if (Math.random() < 0.85) {
                        for (let /* int */ var36 = 0; var36 < activePlayer; ++var36) {
                            if (var28 == UI[var36] && teams[var36] == teams[activePlayer]) {
                                var31 = true;
                                var28 = activePlayer;
                            }
                        }
                    }
                }
            } else {
                while ((teams[var28] == teams[activePlayer] || currentStatus[var28] == 0) && var29 < 500) {
                    var28 = Math.floor(Math.random() * numberOfStations);
                    ++var29;
                }
            }

            let var5;
            let var7;
            let var9;
            let var11;
            let var13;
            let /* int */ var27;
            if (ais[activePlayer] == 1) {
                var13 = Math.random();
                if (var13 < 0.18) {
                    currentHyperspace[activePlayer] = 1;
                }
            } else if (ais[activePlayer] == 2 && var28 != activePlayer) {
                var11 = 1.0;
                var5 = stationX[var28] - stationX[activePlayer];
                var7 = stationY[var28] - stationY[activePlayer];
                if (var5 < 0.0) {
                    var11 = -1.0;
                }

                var9 = (-(Math.floor(180.0 * Math.atan(var7 / var5) / Math.PI)) + 180 - (var11 * 90.0));
                if (totalMass < 20.0) {
                    var27 = Math.floor((Math.random() * Math.random() + Math.random() * Math.random() + Math.random() * Math.random()) * 10.0);
                } else if (totalMass < 100.0) {
                    var27 = Math.floor((Math.random() * Math.random() + Math.random() * Math.random() + Math.random()) * 60.0);
                } else if (totalMass < 300.0) {
                    var27 = Math.floor((Math.random() * Math.random() + Math.random() + Math.random()) * 60.0);
                } else {
                    var27 = Math.floor(Math.random() * 220.0);
                }

                for (var38 = Math.round(var9 + var27 * Math.random() - var27 * Math.random()); var38 > 360; var38 -= 360) {
                }

                while (var38 < 0) {
                    var38 += 360;
                }

                if (totalMass < 100.0) {
                    var39 = Math.floor((3.0 * Math.random() * Math.random() + Math.random()) * 200.0);
                } else if (totalMass < 300.0) {
                    var39 = Math.floor((Math.random() + Math.random()) * 400.0);
                } else {
                    var39 = Math.floor(Math.random() * 800.0);
                }

                var13 = Math.random();
                if (var13 < 0.14) {
                    currentHyperspace[activePlayer] = 1;
                }
            }

            if (ais[activePlayer] >= 3) {
                let /* int */ var40 = fI[activePlayer][var28] + Math.floor(6.0 * Math.random() - 6.0 * Math.random());

                let /* int */ var41;
                for (var41 = jI[activePlayer][var28] + Math.floor(20.0 * Math.random() - 20.0 * Math.random()); var40 > 360; var40 -= 360) {
                }

                while (var40 < 0) {
                    var40 += 360;
                }

                if (var41 < 0) {
                    var41 = 0;
                }

                if (var41 > 800) {
                    var41 = 800;
                }

                let var17 = calculateSomeNumber(var40, var41, var28, var34, var35, var32);
                var38 = var40;
                var39 = var41;
                UZ = var17;
                var29 = 1;

                while (true) {
                    if (var29 >= var33) {
                        var13 = Math.random();
                        if (ais[activePlayer] >= 4) {
                            let var15 = 0.08;
                            if (var17 < 50.0) {
                                var15 = 0.03;
                            } else if (var17 < 200.0) {
                                var15 = 0.04;
                            } else if (var17 < 400.0) {
                                var15 = 0.05;
                            } else if (var17 < 800.0) {
                                var15 = 0.06;
                            } else if (var17 < 2000.0) {
                                var15 = 0.12;
                            } else {
                                var15 = 0.16;
                            }

                            if (totalMass < 100.0) {
                                var15 *= 0.5;
                            } else if (totalMass > 100.0 && totalMass <= 300.0) {
                                var15 = var15;
                            } else if (totalMass > 300.0 && totalMass <= 600.0) {
                                var15 *= 1.2;
                            } else if (totalMass > 600.0 && totalMass <= 2000.0) {
                                var15 *= 1.5;
                            } else if (totalMass > 2000.0) {
                                var15 *= 2.0;
                            }

                            if (var13 < var15) {
                                currentHyperspace[activePlayer] = 1;
                            }
                            break;
                        }

                        if (var13 < 0.11) {
                            currentHyperspace[activePlayer] = 1;
                        }
                        break;
                    }

                    let var19;
                    if (var28 != activePlayer) {
                        //sleep(5L);

                        var40 = fI[activePlayer][var28] + Math.floor(9.0 * Math.random() - 9.0 * Math.random());

                        for (var41 = jI[activePlayer][var28] + Math.floor(90.0 * Math.random() - 90.0 * Math.random()); var40 > 360; var40 -= 360) {
                        }

                        while (var40 < 0) {
                            var40 += 360;
                        }

                        if (var41 < 0) {
                            var41 = 0;
                        }

                        if (var41 > 800) {
                            var41 = 800;
                        }

                        var19 = calculateSomeNumber(var40, var41, var28, var34, var35, var32);
                        if (var19 < var17) {
                            VZ = var19;
                            var39 = var41;
                            var38 = var40;
                            var17 = var19;
                        }

                        var11 = 1.0;
                        var5 = stationX[var28] - stationX[activePlayer];
                        var7 = stationY[var28] - stationY[activePlayer];
                        if (var5 < 0.0) {
                            var11 = -1.0;
                        }

                        var9 = (-(Math.floor(180.0 * Math.atan(var7 / var5) / Math.PI)) + 180 - Math.floor(var11 * 90.0));
                        if (var17 < 2000.0 && Math.random() < 0.5) {
                            var9 = var38;
                        }

                        if (totalMass < 20.0) {
                            var27 = Math.floor((Math.random() * Math.random() + Math.random() * Math.random() + Math.random() * Math.random()) * 10.0);
                        } else if (totalMass < 100.0) {
                            var27 = Math.floor((Math.random() * Math.random() + Math.random() * Math.random() + Math.random()) * 60.0);
                        } else if (totalMass < 200.0) {
                            var27 = Math.floor((Math.random() * Math.random() + Math.random() + Math.random()) * 70.0);
                        } else {
                            var27 = Math.floor(Math.random() * 220.0);
                        }

                        for (var40 = Math.round(var9 + var27 * Math.random() - var27 * Math.random()); var40 > 360; var40 -= 360) {
                        }

                        while (var40 < 0) {
                            var40 += 360;
                        }

                        var41 = Math.floor(Math.random() * 800.0);
                    }

                    var19 = calculateSomeNumber(var40, var41, var28, var34, var35, var32);
                    if (var19 < var17) {
                        VZ = var19;
                        var39 = var41;
                        var38 = var40;
                        var17 = var19;
                    }

                    ++var29;
                }
            }

            currentAngle[activePlayer] = var38;
            currentPower[activePlayer] = var39;
            fI[activePlayer][var28] = var38;
            jI[activePlayer][var28] = var39;
            UI[activePlayer] = var28;
        }
    } catch (e) {
        console.error(e);
    }
}

function calculateSomeNumber(/* int */ var1, /* int */ var2, /* int */ var3, /* int */ var4, /* int */ var5, /* int */ var6) {
    let var7 = (var2 / 1000.0 + zeroPoint2) * ratioZeroPoint8 * Math.sin(var1 / 180.0 * Math.PI);
    let var9 = (var2 / 1000.0 + zeroPoint2) * ratioZeroPoint8 * Math.cos(var1 / 180.0 * Math.PI);
    let var11 = stationX[activePlayer] + (c[activePlayer] + onePoint0) * Math.sin(var1 / 180.0 * Math.PI);
    let var13 = stationY[activePlayer] + (c[activePlayer] + onePoint0) * Math.cos(var1 / 180.0 * Math.PI);
    let notDone = true;
    let var23 = 1.0;
    let var37 = var4 * timeStep;
    let var41 = 0;
    TZ = 0.0;
    let var19 = resizedWidth * resizedWidth;

    while (notDone) {
        let var25;
        let var27;
        for (let var42 = 0; var42 < numberOfPlanets; ++var42) {
            var23 = 1.0;
            var25 = planetX[var42] - var11;
            var27 = planetY[var42] - var13;
            let var29 = Math.atan(var27 / var25);
            if (var25 < 0.0) {
                var23 = -1.0;
            }

            let var33 = var25 * var25 + var27 * var27;
            if (var33 < planetWidthMaybe[var42] * planetWidthMaybe[var42]) {
                if (R[var42] <= 0 && var6 == 1) {
                    let var31;
                    if (var23 < 0.0) {
                        var31 = var29 + Math.PI;
                    } else {
                        var31 = var29;
                    }

                    let var22 = -R[var42];
                    var11 = planetX[var22] + Math.cos(var31) * (planetWidthMaybe[var22] + 0.5);
                    var13 = planetY[var22] + Math.sin(var31) * (planetWidthMaybe[var22] + 0.5);
                } else {
                    notDone = false;
                }
            } else {
                let var35 = var23 * iZ * planetNumber[var42] / var33;
                if (var35 > 0.3) {
                    notDone = false;
                }

                if (var35 > TZ) {
                    TZ = var35;
                }

                var7 += Math.cos(var29) * var35 * var37;
                var9 += Math.sin(var29) * var35 * var37;
            }
        }

        var11 += var7 * var37;
        var13 += var9 * var37;
        var25 = stationX[var3] - var11;
        var27 = stationY[var3] - var13;
        let var39 = var25 * var25 + var27 * var27;
        if (var39 < var19) {
            var19 = var39;
        }

        if (var11 < negativeResizedWidth || var11 > doubleResizedWidth || var13 < negativeResizedWidth2 || var13 > resizedHeightPlusWidth) {
            notDone = false;
        }

        ++var41;
        if (var41 >= var5) {
            notDone = false;
        }
    }

    return var19;
}

function shoot() {
    for (let i = 0; i < numberOfStations; ++i) {
        if (currentStatus[i] == 1 && currentHyperspace[i] == 0) {
            shots[i]++;
            playerShots[teams[i]]++;
            let var10000 = totalPower;
            var10000[i] += currentPower[i];
            lastAngle[i] = currentAngle[i];
            lastPower[i] = currentPower[i];
            shotStatus[i] = 1;
            somePowerTimesSin[i] = (currentPower[i] / 1000.0 + zeroPoint2) * ratioZeroPoint8 * Math.sin(currentAngle[i] / 180.0 * Math.PI);
            somePowerTimesCos[i] = (currentPower[i] / 1000.0 + zeroPoint2) * ratioZeroPoint8 * Math.cos(currentAngle[i] / 180.0 * Math.PI);
            smallX[i] = stationX[i] + (c[i] + onePoint0) * Math.sin(currentAngle[i] / 180.0 * Math.PI);
            smallY[i] = stationY[i] + (c[i] + onePoint0) * Math.cos(currentAngle[i] / 180.0 * Math.PI);
            someXval1[i] = smallX[i];
            someYval1[i] = smallY[i];
            someXval2[i] = smallX[i];
            someYval2[i] = smallY[i];
            someXval3[i] = smallX[i];
            someYval3[i] = smallY[i];
            someXval4[i] = smallX[i];
            someYval4[i] = smallY[i];
            pathl[i] = 0;
            teleports[i] = 0;
        } else {
            shotStatus[i] = 0;
        }
    }

    currentMode = 1;
    drawing2 = 1;
    drawing = 1;
    finishedDrawing = 0;
    paused = false;

    while (finishedDrawing == 0) {
        paint();

        //sleep(200L);
    }

    drawing2 = 0;
    drawing = 0;
}

function addActionListener() {
    let var1 = 130.0;
    let /* boolean */  var3 = false;
    let /* int */ var4 = 0;

    for (let /* int */ var5 = 0; var5 < numberOfStations; ++var5) {
        if (currentStatus[var5] == 1 && currentHyperspace[var5] == 1) {
            var3 = false;
            i[var5] = stationX[var5];
            z[var5] = stationY[var5];
            currentStatus[var5] = 3;
            pathl[var5] = 0;
            teleports[var5] = 0;

            while (!var3) {
                var3 = true;
                stationX[var5] = (Math.floor(0.9 * Math.random() * resizedWidth + 0.05 * resizedWidth));
                stationY[var5] = (Math.floor(0.9 * Math.random() * resizedHeight + 0.05 * resizedHeight));

                for (let /* int */ var6 = 0; var6 < numberOfStations; ++var6) {
                    if (var6 != var5 && (stationX[var5] - stationX[var6]) * (stationX[var5] - stationX[var6]) + (stationY[var5] - stationY[var6]) * (stationY[var5] - stationY[var6]) < var1 * var1) {
                        if (var3) {
                            var1 -= 5.0;
                        }

                        var3 = false;
                        if (var1 < 48.0) {
                            var1 = 48.0;
                        }
                    }
                }

                for (let /* int */ var7 = 0; var7 < numberOfPlanets; ++var7) {
                    if ((stationX[var5] - planetX[var7]) * (stationX[var5] - planetX[var7]) + (stationY[var5] - planetY[var7]) * (stationY[var5] - planetY[var7]) < (c[var5] + planetWidthMaybe[var7]) * (c[var5] + planetWidthMaybe[var7])) {
                        var3 = false;
                    }
                }

                ++var4;
                if (var4 > 5000) {
                    var3 = true;
                }

                // if (MathIEEEremainder(var4, 500.0) == 0.0) {
                //sleep(50L);
                // }
            }

            currentHyperspace[var5] = 0;
            currentStatus[var5] = 3;
            hyperspaceCount[var5] = 1;
        }
    }

}

function addAdjustmentListener() {
    let /* boolean */  var1 = false;
    hyperSpacing = 0;
    activePlayer = 0;
    currentStep = 0;
    let /* int */ var2 = 0;
    let /* int */ var3 = maxPlayers;
    let /* int */ var4 = -1;
    let /* int */ var5 = -1;
    prtUpper = 0;
    random = 0;
    round = 0;
    drawing2 = 1;
    drawing = 1;
    ++currentTurn;

    for (let /* int */ i = 0; i < numberOfStations; ++i) {
        if (currentStatus[i] == 3) {
            currentStatus[i] = 1;
        }
    }

    while (currentStatus[activePlayer] != 1 && activePlayer < numberOfStations) {
        ++activePlayer;
    }

    let /* int */ var10002;
    for (let /* int */ i = 0; i < numberOfStations; ++i) {
        if (currentStatus[i] == 1) {
            var10002 = playerTurn[i]++;
        }

        if (currentStatus[i] == 1) {
            var10002 = playerData9[teams[i]]++;
        }

        smallX[i] = 0.0;
        smallY[i] = 0.0;
        someYval1[i] = 0.0;
        someXval1[i] = 0.0;
        someYval2[i] = 0.0;
        someXval2[i] = 0.0;
        someYval3[i] = 0.0;
        someXval3[i] = 0.0;
        someYval4[i] = 0.0;
        someXval4[i] = 0.0;
        shotStatus[i] = 0;
        shotExp[i] = 0.0;
        currentExplosion[i] = 0.0;
        hyperspaceCount[i] = 0;
        currentHyperspace[i] = 0;
        lastdisp[i] = 0;
    }

    if (activePlayer < numberOfStations) {
        isInHyperspaceMaybe = 1;
        angleSlider.value = (360 - currentAngle[activePlayer]);
        powerSlider.value = currentPower[activePlayer];
    }

    let /* int */ var8 = 0;

    for (let /* int */ var9 = 0, var10 = 0; var9 < numberOfTeams; ++var9) {
        var10 = 0;

        for (let cplIndex = 0; cplIndex < numberOfStations; ++cplIndex) {
            if (currentStatus[cplIndex] == 1 && teams[cplIndex] == var9) {
                ++var10;
                currentWinner = cplIndex;
                if (var10 > var2) {
                    var4 = teams[cplIndex];
                    var2 = var10;
                } else if (var10 == var2) {
                    var4 = -1;
                }
            }
        }

        if (var10 < var3 && var10 > 0) {
            var5 = var9;
            var3 = var10;
        } else if (var10 == var3) {
            var5 = -1;
        }

        if (var10 > 0) {
            ++var8;
        }
    }

    if (var8 == 0) {
        currentWinner = -1;
    } else if (var8 > 1) {
        currentWinner = -2;
    }

    winningTeam = var4;
    h = var5;
    if (currentWinner > -1) {
        for (let var10 = 0; var10 < numberOfStations; ++var10) {
            if (currentStatus[var10] == 1) {
                var10002 = survives[var10]++;
                var10002 = playerData14[teams[var10]]++;
                var10002 = playerData8[teams[var10]]++;
            }
        }

        var10002 = playerData8[teams[currentWinner]]++;
        var10002 = playerData15[teams[currentWinner]]++;
    }

    for (let var10 = 0; var10 < numberOfTeams; ++var10) {
        for (let var11 = 1; var11 < numberOfTeams; ++var11) {
            if (playerData8[s[var11]] > playerData8[s[var11 - 1]] || playerData8[s[var11]] == playerData8[s[var11 - 1]] && Math.round((100 * playerData13[s[var11]]) / (playerShots[s[var11]] + 1.0E-6)) > Math.round((100 * playerData13[s[var11 - 1]]) / (playerShots[s[var11 - 1]] + 1.0E-6))) {
                let /* int */ var17 = s[var11];
                s[var11] = s[var11 - 1];
                s[var11 - 1] = var17;
            }
        }
    }

    if (playerData8[s[0]] <= playerData8[s[1]] && (playerData8[s[0]] != playerData8[s[1]] || Math.round((100 * playerData13[s[0]]) / (playerShots[s[0]] + 1.0E-6)) <= Math.round((100 * playerData13[s[1]]) / (playerShots[s[1]] + 1.0E-6)))) {
        topTeam = -1;
    } else {
        topTeam = s[0];
    }

    if (playerData8[s[numberOfTeams - 1]] >= playerData8[s[numberOfTeams - 2]] && (playerData8[s[numberOfTeams - 1]] != playerData8[s[numberOfTeams - 2]] || Math.round((100 * playerData13[s[numberOfTeams - 1]]) / (playerShots[s[numberOfTeams - 1]] + 1.0E-6)) >= Math.round((100 * playerData13[s[numberOfTeams - 2]]) / (playerShots[s[numberOfTeams - 2]] + 1.0E-6)))) {
        k = -1;
    } else {
        k = s[numberOfTeams - 1];
    }

    let /* int */ var12 = 2;
    bloodlust = -1;

    let /* int */ var14;
    for (let /* int */ var13 = 0; var13 < numberOfTeams; ++var13) {
        var11 = 0;

        for (var14 = 0; var14 < numberOfStations; ++var14) {
            if (teams[var14] == var13) {
                var11 += kills[var14];
                var11 += ownGoals[var14];
            }
        }

        if (var11 > var12) {
            var12 = var11;
            bloodlust = var13;
        } else if (var11 == var12) {
            bloodlust = -1;
        }
    }

    var12 = 3;
    oppression = -1;

    for (var14 = 0; var14 < numberOfTeams; ++var14) {
        var11 = 0;

        for (let /* int */ var15 = 0; var15 < numberOfStations; ++var15) {
            if (teams[var15] == var14) {
                var11 += opressionkills[var15];
            }
        }

        if (var11 > var12) {
            var12 = var11;
            oppression = var14;
        } else if (var11 == var12) {
            oppression = -1;
        }
    }

    //sleep(100L);

    currentMode = 0;
}

function paint() {
    ctx.fillStyle = "white";
    fillRect(ctx, 0, 0, canvas.width, canvas.height)
    extraCtx.clearRect(0, 0, extraCtx.width, extraCtx.height);

    update();
}

function update() {
    try {
        let timeStartOfUpdate = Date.now();
        let var40 = new Array(3);
        let var41 = new Array(3);
        let var45 = getCanvasSize();
        if (dataIsReset == 1) {
            if (!paused || slowMo) {
                extraCtx.fillStyle = 'black';
                ctx.fillStyle = 'black';
                fillRect(ctx, 0, 0, var45.width, var45.height);
                if (drawing2 == 1 && round < 2) {
                    fillRect(extraCtx, 0, 0, var45.width, var45.height);
                }

                ctx.font = secondFont;
                if (round < 2 && drawing == 1) {
                    if (scenario < 21) {
                        // Draw background stars

                        for (let i = 0; i < SZ; ++i) {
                            extraCtx.fillStyle = WZ[i].darker();
                            fillOval(extraCtx, KZ[i], LZ[i], MZ[i], MZ[i]);
                        }

                        let /* byte */  var29 = 0;
                        for (let i = 0; i < var29; ++i) {
                            let random1 = resizedWidth * getRandomDouble(0, 1);
                            let random2 = resizedWidth * getRandomDouble(0, 1);
                            let random3 = resizedHeight * getRandomDouble(0, 1);
                            let random4 = resizedHeight * getRandomDouble(0, 1);

                            let var26 = 0.4 * resizedHeight * getRandomDouble(0, 1);
                            let /* short */ var28 = 1000;

                            for (let j = 0; j < var28; ++j) {
                                let var20 = getNextGaussian() + 0.5;
                                let var22 = random1 + var20 * (random2 - random1);
                                let var24 = random3 + var20 * (random4 - random3);
                                extraCtx.fillStyle = WZ[j].darker();
                                fillOval(extraCtx, Math.floor(var22 + getNextGaussian() * var26), Math.floor(var24 + getNextGaussian() * var26), Math.floor(0.5 * MZ[j]), Math.floor(0.5 * MZ[j]));
                            }
                        }
                    }

                    // Draw main star background

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (drawingPlanetType[i] == 2) {
                            for (let j = 0; j < polygonNPoints; ++j) {
                                let var4 = Math.PI * 2 * j / polygonNPoints;
                                let var6 = planetWidthMaybe[i] + planetDoubleNumber[i] * 1.5 * Math.sqrt(planetWidthMaybe[i] * 1.2) + planetDoubleNumber[i] * 1.5 * Math.sqrt(planetWidthMaybe[i] * 0.9 * getRandomDouble(0, 1));
                                polygonXPoints[j] = Math.floor(resizeRatio * (var6 * Math.cos(var4) + planetX[i]));
                                polygonYPoints[j] = Math.floor(resizeRatio * (var6 * Math.sin(var4) + planetY[i]));
                            }

                            extraCtx.fillStyle = planetColours[i].darker().darker().darker().darker().darker();
                            fillPolygon(extraCtx, polygonXPoints, polygonYPoints, polygonNPoints);
                        }
                    }

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (drawingPlanetType[i] == 2) {
                            for (let j = 0; j < polygonNPoints; ++j) {
                                let var4 = Math.PI * 2 * j / polygonNPoints;
                                let var6 = planetWidthMaybe[i] + planetDoubleNumber[i] * 1.5 * Math.sqrt(planetWidthMaybe[i] * 0.22) + planetDoubleNumber[i] * 1.5 * Math.sqrt(planetWidthMaybe[i] * 0.6 * getRandomDouble(0, 1));
                                polygonXPoints[j] = Math.floor(resizeRatio * (var6 * Math.cos(var4) + planetX[i]));
                                polygonYPoints[j] = Math.floor(resizeRatio * (var6 * Math.sin(var4) + planetY[i]));
                            }

                            extraCtx.fillStyle = planetColours[i].darker().darker().darker().darker();
                            fillPolygon(extraCtx, polygonXPoints, polygonYPoints, polygonNPoints);
                        }
                    }

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (drawingPlanetType[i] == 2) {
                            for (let j = 0; j < polygonNPoints; ++j) {
                                let var4 = Math.PI * 2 * j / polygonNPoints;
                                let var6 = planetWidthMaybe[i] - planetDoubleNumber[i] * Math.sqrt(planetWidthMaybe[i] * 0.02) + planetDoubleNumber[i] * 1.5 * Math.sqrt(planetWidthMaybe[i] * 0.7 * getRandomDouble(0, 1));
                                polygonXPoints[j] = Math.floor(resizeRatio * (var6 * Math.cos(var4) + planetX[i]));
                                polygonYPoints[j] = Math.floor(resizeRatio * (var6 * Math.sin(var4) + planetY[i]));
                            }

                            extraCtx.fillStyle = planetColours[i].darker().darker().darker();
                            fillPolygon(extraCtx, polygonXPoints, polygonYPoints, polygonNPoints);
                        }
                    }

                    // Draw black holes?

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (drawingPlanetType[i] == 3) {
                            extraCtx.fillStyle = planetColours[i].darker().darker().darker();
                            fillOval(extraCtx, (planetX[i] * resizeRatio) - resizedPlanetWidthMaybe[i] - (planetWidthMaybe[i] * resizeRatio), (planetY[i] * resizeRatio) - resizedPlanetWidthMaybe[i] - (planetWidthMaybe[i] * resizeRatio), (resizedPlanetWidthMaybe[i] + (planetWidthMaybe[i] * resizeRatio)) * 2, (resizedPlanetWidthMaybe[i] + (planetWidthMaybe[i] * resizeRatio)) * 2);
                        }
                    }

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (drawingPlanetType[i] == 3) {
                            extraCtx.fillStyle = planetColours[i].darker();
                            fillOval(extraCtx, (planetX[i] * resizeRatio) - (resizedPlanetWidthMaybe[i] * 0.5 + planetWidthMaybe[i] * resizeRatio), (planetY[i] * resizeRatio) - (resizedPlanetWidthMaybe[i] * 0.5 + planetWidthMaybe[i] * resizeRatio), (resizedPlanetWidthMaybe[i] * 0.5 + planetWidthMaybe[i] * resizeRatio) * 2, (resizedPlanetWidthMaybe[i] * 0.5 + planetWidthMaybe[i] * resizeRatio) * 2);
                        }
                    }

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (drawingPlanetType[i] == 3) {
                            extraCtx.fillStyle = formatColor(planetColours[i]);
                            fillOval(extraCtx, (planetX[i] * resizeRatio) - (resizedPlanetWidthMaybe[i] * 0.2 + planetWidthMaybe[i] * resizeRatio), (planetY[i] * resizeRatio) - (resizedPlanetWidthMaybe[i] * 0.2 + planetWidthMaybe[i] * resizeRatio), 2 * (resizedPlanetWidthMaybe[i] * 0.2 + planetWidthMaybe[i] * resizeRatio), 2 * (resizedPlanetWidthMaybe[i] * 0.2 + planetWidthMaybe[i] * resizeRatio));
                        }
                    }

                    for (let i = 0; i < numberOfPlanets; ++i) {
                        if (drawingPlanetType[i] == 3) {
                            extraCtx.fillStyle = planetColours[i].brighter();
                            fillOval(extraCtx, (planetX[i] * resizeRatio) - (resizedPlanetWidthMaybe[i] * 0.1 + planetWidthMaybe[i] * resizeRatio), (planetY[i] * resizeRatio) - (resizedPlanetWidthMaybe[i] * 0.1 + planetWidthMaybe[i] * resizeRatio), 2 * (resizedPlanetWidthMaybe[i] * 0.1 + planetWidthMaybe[i] * resizeRatio), 2 * (resizedPlanetWidthMaybe[i] * 0.1 + planetWidthMaybe[i] * resizeRatio));
                        }
                    }

                    for (let i = 0; i < numberOfPlanets; ++i) {

                        // Draw planets

                        if (drawingPlanetType[i] < 2) {
                            extraCtx.fillStyle = formatColor(planetColours[i]);
                            fillOval(extraCtx, Math.floor(planetX[i] * resizeRatio) - resizedPlanetWidthMaybe[i], Math.floor(planetY[i] * resizeRatio) - resizedPlanetWidthMaybe[i], resizedPlanetWidthMaybe[i] * 2, resizedPlanetWidthMaybe[i] * 2);
                        }

                        if (drawingPlanetType[i] == 1) {
                            extraCtx.fillStyle = planetColours[i].darker();
                            fillOval(extraCtx, Math.floor(planetX[i] * resizeRatio) - resizedPlanetWidthMaybe[i], Math.floor(planetY[i] * resizeRatio) - resizedPlanetWidthMaybe[i], resizedPlanetWidthMaybe[i] * 2, resizedPlanetWidthMaybe[i] * 2, 90, 180);
                            extraCtx.fillStyle = formatColor(planetColours[i]);
                            fillOval(extraCtx, Math.floor(planetX[i] * resizeRatio - (resizedPlanetWidthMaybe[i] / 2)), Math.floor(planetY[i] * resizeRatio) - resizedPlanetWidthMaybe[i], resizedPlanetWidthMaybe[i], resizedPlanetWidthMaybe[i] * 2, 90, 180);
                        }

                        // Draw main star

                        if (drawingPlanetType[i] == 2) {
                            extraCtx.fillStyle = planetColours[i].darker();
                            fillOval(extraCtx, Math.floor(planetX[i] * resizeRatio) - resizedPlanetWidthMaybe[i], (planetY[i] * resizeRatio) - resizedPlanetWidthMaybe[i], resizedPlanetWidthMaybe[i] * 2, resizedPlanetWidthMaybe[i] * 2);
                            extraCtx.fillStyle = formatColor(planetColours[i]);
                            fillOval(extraCtx, Math.floor(planetX[i] * resizeRatio) - resizedPlanetWidthMaybe[i] + (3.5 * resizeRatio), Math.floor(planetY[i] * resizeRatio) - resizedPlanetWidthMaybe[i] + Math.floor(3.5 * resizeRatio), resizedPlanetWidthMaybe[i] * 2 - 2 * Math.floor(3.5 * resizeRatio), resizedPlanetWidthMaybe[i] * 2 - 2 * Math.floor(3.5 * resizeRatio));
                            extraCtx.fillStyle = planetColours[i].brighter();
                            fillOval(extraCtx, Math.floor(planetX[i] * resizeRatio) - resizedPlanetWidthMaybe[i] + (10.0 * resizeRatio), Math.floor(planetY[i] * resizeRatio) - resizedPlanetWidthMaybe[i] + Math.floor(10.0 * resizeRatio), resizedPlanetWidthMaybe[i] * 2 - 2 * Math.floor(10.0 * resizeRatio), resizedPlanetWidthMaybe[i] * 2 - 2 * Math.floor(10.0 * resizeRatio));
                        }

                        if (drawingPlanetType[i] == 3) {
                            extraCtx.fillStyle = planetColours[i].darker();
                            fillOval(extraCtx, Math.floor(planetX[i] * resizeRatio) - Math.floor(resizeRatio * planetWidthMaybe[i]), Math.floor(planetY[i] * resizeRatio) - Math.floor(planetWidthMaybe[i] * resizeRatio), (resizeRatio * planetWidthMaybe[i]) * 2, (resizeRatio * planetWidthMaybe[i]) * 2);
                            extraCtx.fillStyle = planetColours[i].darker().darker();
                            fillOval(extraCtx, Math.floor(planetX[i] * resizeRatio) - Math.floor(resizeRatio * planetWidthMaybe[i]) + 1, Math.floor(planetY[i] * resizeRatio) - Math.floor(resizeRatio * planetWidthMaybe[i]) + 1, Math.floor(resizeRatio * planetWidthMaybe[i]) * 2 - 2, (resizeRatio * planetWidthMaybe[i]) * 2 - 2);
                            extraCtx.fillStyle = 'black';
                            fillOval(extraCtx, Math.floor(planetX[i] * resizeRatio) - Math.floor(resizeRatio * planetWidthMaybe[i]) + 2, Math.floor(planetY[i] * resizeRatio) - Math.floor(resizeRatio * planetWidthMaybe[i]) + 2, Math.floor(resizeRatio * planetWidthMaybe[i]) * 2 - 4, (resizeRatio * planetWidthMaybe[i]) * 2 - 4);
                        }
                    }
                }

                ++round;

                // Draw shot trail

                for (let i = 0; i < numberOfStations; ++i) {
                    if (shotStatus[i] > 0) {
                        extraCtx.fillStyle = teamColours[i].darker();

                        for (let j = lastdisp[i]; j < pathl[i]; ++j) {
                            fillOval(extraCtx, shotTailX[i][j] - resizedTailCircleRadius[i], shotTailY[i][j] - resizedTailCircleRadius[i], resizedTailCircleRadius[i] * 2, resizedTailCircleRadius[i] * 2);
                        }

                        if (pathl[i] - 1 > 0) {
                            lastdisp[i] = pathl[i] - 1;
                        }
                    }
                }
            }

            ctx.drawImage(extraCanvas, 0, 0);

            // Draw the players' stations

            for (let i = 0; i < numberOfStations; ++i) {
                if (currentStatus[i] == 1) {
                    // Right half
                    ctx.fillStyle = formatColor(teamColours[i]);
                    fillOval(ctx, (stationX[i] * resizeRatio) - stationRadius[i], (stationY[i] * resizeRatio) - stationRadius[i], stationRadius[i] * 2, stationRadius[i] * 2);
                    // Left half
                    ctx.fillStyle = teamColours[i].darker();
                    fillOval(ctx, (stationX[i] * resizeRatio) - stationRadius[i], (stationY[i] * resizeRatio) - stationRadius[i], stationRadius[i] * 2, stationRadius[i] * 2, 90, 180);
                    // Light inside left half
                    ctx.fillStyle = formatColor(teamColours[i]);
                    fillOval(ctx, (stationX[i] * resizeRatio - (stationRadius[i] / 2)), (stationY[i] * resizeRatio) - stationRadius[i], stationRadius[i], stationRadius[i] * 2, 90, 180);

                    ctx.fillStyle = ctx.strokeStyle = teamColours[i].darker();
                    drawOval(ctx, (stationX[i] * resizeRatio - stationRadius[i] + 1.0), (stationY[i] * resizeRatio) - 1, 2 * stationRadius[i] - 2, stationRadius[i] / 3, 0, -180);
                    fillOval(ctx, (stationX[i] * resizeRatio) - stationRadius[i] / 10, (stationY[i] * resizeRatio) - (stationRadius[i] * 0.8), (stationRadius[i] * 0.8), (stationRadius[i] * 0.8));
                } else if (currentStatus[i] == 3) {
                    if (hyperspaceCount[i] < 2) {
                        ctx.fillStyle = teamColours[i].brighter();
                    } else if (hyperspaceCount[i] < 3) {
                        ctx.fillStyle = 'white';
                    } else if (hyperspaceCount[i] < 13) {
                        ctx.fillStyle = formatColor([255 - 20 * hyperspaceCount[i], 255 - 20 * hyperspaceCount[i], 255 - 20 * hyperspaceCount[i]]);
                    }

                    if (hyperspaceCount[i] < 13) {
                        fillOval(ctx, (i[i] * resizeRatio) - stationRadius[i], (z[i] * resizeRatio) - stationRadius[i], stationRadius[i] * 2, stationRadius[i] * 2);
                    }

                    if (hyperspaceCount[i] > 12 && hyperspaceCount[i] < 24) {
                        ctx.fillStyle = formatColor([20 * (hyperspaceCount[i] - 12), 20 * (hyperspaceCount[i] - 12), 20 * (hyperspaceCount[i] - 12)]);
                    } else if (hyperspaceCount[i] == 24) {
                        ctx.fillStyle
                    } else if (hyperspaceCount[i] == 25) {
                        ctx.fillStyle = teamColours[i].brighter();
                    }

                    if (hyperspaceCount[i] > 12) {
                        fillOval(ctx, (stationX[i] * resizeRatio) - stationRadius[i], (stationY[i] * resizeRatio) - stationRadius[i], stationRadius[i] * 2, stationRadius[i] * 2);
                    }

                    if (Math.random() < 0.5) {
                        let /* int */ var10002 = hyperspaceCount[i]++;
                    }

                    if (hyperspaceCount[i] > 25) {
                        hyperspaceCount[i] = 0;
                        currentStatus[i] = 1;
                    }
                }
            }

            // Draw the shot lines

            for (let currentShotIndex = 0; currentShotIndex < numberOfStations; ++currentShotIndex) {
                if (shotStatus[currentShotIndex] == 1 || shotStatus[currentShotIndex] == 2) {

                    // The shot tail

                    ctx.fillStyle = formatColor(teamColours[currentShotIndex]);

                    for (let i = Math.max(0, pathl[currentShotIndex] - 50); i < pathl[currentShotIndex] - 25; ++i) {
                        fillOval(ctx, shotTailX[currentShotIndex][i] - resizedTailCircleRadius[currentShotIndex], shotTailY[currentShotIndex][i] - resizedTailCircleRadius[currentShotIndex], resizedTailCircleRadius[currentShotIndex] * 2, resizedTailCircleRadius[currentShotIndex] * 2);
                    }

                    ctx.fillStyle = teamColours[currentShotIndex].brighter();

                    for (let i = Math.max(0, pathl[currentShotIndex] - 25); i < pathl[currentShotIndex] - 10; ++i) {
                        fillOval(ctx, shotTailX[currentShotIndex][i] - resizedTailCircleRadius[currentShotIndex], shotTailY[currentShotIndex][i] - resizedTailCircleRadius[currentShotIndex], resizedTailCircleRadius[currentShotIndex] * 2, resizedTailCircleRadius[currentShotIndex] * 2);
                    }

                    ctx.fillStyle = teamColours[currentShotIndex].brighter().brighter();

                    for (let i = Math.max(0, pathl[currentShotIndex] - 10); i < pathl[currentShotIndex]; ++i) {
                        fillOval(ctx, shotTailX[currentShotIndex][i] - resizedTailCircleRadius[currentShotIndex], shotTailY[currentShotIndex][i] - resizedTailCircleRadius[currentShotIndex], resizedTailCircleRadius[currentShotIndex] * 2, resizedTailCircleRadius[currentShotIndex] * 2);
                    }

                    // The shot dot itself

                    if (shotStatus[currentShotIndex] == 1) {
                        ctx.fillStyle = 'white';
                        fillOval(ctx, (smallX[currentShotIndex] * resizeRatio) - resizedTailCircleRadius[currentShotIndex], (smallY[currentShotIndex] * resizeRatio) - resizedTailCircleRadius[currentShotIndex], resizedTailCircleRadius[currentShotIndex] * 2, resizedTailCircleRadius[currentShotIndex] * 2);
                    } else {
                        ctx.fillStyle = teamColours[currentShotIndex].darker();
                        fillOval(ctx, (smallX[currentShotIndex] * resizeRatio) - resizedTailCircleRadius[currentShotIndex], (smallY[currentShotIndex] * resizeRatio) - resizedTailCircleRadius[currentShotIndex], resizedTailCircleRadius[currentShotIndex] * 2, resizedTailCircleRadius[currentShotIndex] * 2);
                    }

                    if (shotStatus[currentShotIndex] == 1) {
                        ctx.font = firstFont;
                        let var16;
                        let var18;
                        let var30;
                        let var32;
                        let var34;
                        let var36;
                        let var38;

                        // Shot is off screen - show the triangle indicator

                        if (smallY[currentShotIndex] < topgapoverconv) {
                            if (smallX[currentShotIndex] < resizedWidth) {
                                var32 = (topgapoverconv - smallY[currentShotIndex]) / (-negativeResizedWidth2 + topgapoverconv);
                                var30 = -smallX[currentShotIndex] / -negativeResizedWidth;
                                if (var30 < var32) {
                                    // Above screen

                                    var30 = (var32 * -negativeResizedWidth + smallX[currentShotIndex]) / (resizedWidth + var32 * -negativeResizedWidth + var32 * (doubleResizedWidth - resizedWidth));
                                    var16 = var30 * resizedWidth;
                                    var18 = topgapoverconv;
                                    var34 = smallX[currentShotIndex] - var16;
                                    var36 = smallY[currentShotIndex] - var18;
                                    var4 = Math.atan(var36 / var34);
                                    if (var34 > 0.0) {
                                        var4 -= Math.PI;
                                    }

                                    var38 = Math.sqrt(var34 * var34 + var36 * var36) + 100.0;
                                    var8 = var38 * 0.06 * Math.cos(var4);
                                    var10 = var38 * 0.06 * Math.sin(var4);
                                    var12 = 5.0 * Math.sin(-var4);
                                    var14 = 5.0 * Math.cos(-var4);
                                    var40[0] = Math.floor(var16 * resizeRatio);
                                    var40[1] = Math.floor((var16 + var8 + var12) * resizeRatio);
                                    var40[2] = Math.floor((var16 + var8 - var12) * resizeRatio);
                                    var41[0] = Math.floor(var18 * resizeRatio);
                                    var41[1] = Math.floor((var18 + var10 + var14) * resizeRatio);
                                    var41[2] = Math.floor((var18 + var10 - var14) * resizeRatio);
                                    ctx.fillStyle = formatColor(teamColours[currentShotIndex]);
                                    fillPolygon(ctx, var40, var41, 3);
                                    ctx.fillStyle = 'green';
                                    if (isDebug && isExtraDebug && currentStation == currentShotIndex) {
                                        ctx.fillText("UP 2:" + var30 + "," + var32, canvasWidth / 2, 280);
                                    }
                                } else {
                                    // Off screen above + left

                                    var32 = (var30 * (-negativeResizedWidth2 + topgapoverconv) + smallY[currentShotIndex] - topgapoverconv) / (resizedHeight - topgapoverconv - bottomgapoverconv + var30 * (-negativeResizedWidth2 + topgapoverconv) + var30 * (resizedHeightPlusWidth - resizedHeight + bottomgapoverconv));
                                    var16 = 0.0;
                                    var18 = var32 * (resizedHeight - bottomgapoverconv - topgapoverconv) + topgapoverconv;
                                    var34 = smallX[currentShotIndex] - var16;
                                    var36 = smallY[currentShotIndex] - var18;
                                    var4 = Math.atan(var36 / var34);
                                    var38 = Math.sqrt(var34 * var34 + var36 * var36) + 100.0;
                                    var8 = var38 * 0.06 * Math.cos(var4);
                                    var10 = var38 * 0.06 * Math.sin(var4);
                                    var12 = 5.0 * Math.sin(-var4);
                                    var14 = 5.0 * Math.cos(-var4);
                                    var40[0] = Math.floor(var16 * resizeRatio);
                                    var40[1] = Math.floor((var16 + var8 + var12) * resizeRatio);
                                    var40[2] = Math.floor((var16 + var8 - var12) * resizeRatio);
                                    var41[0] = Math.floor(var18 * resizeRatio);
                                    var41[1] = Math.floor((var18 + var10 + var14) * resizeRatio);
                                    var41[2] = Math.floor((var18 + var10 - var14) * resizeRatio);
                                    ctx.fillStyle = formatColor(teamColours[currentShotIndex]);
                                    fillPolygon(ctx, var40, var41, 3);
                                    ctx.fillStyle = 'green';
                                    if (isDebug && isExtraDebug && currentStation == currentShotIndex) {
                                        ctx.fillText("LEFT UP:" + var30 + "," + var32, canvasWidth / 2, 280);
                                    }
                                }
                            } else {
                                var32 = (topgapoverconv - smallY[currentShotIndex]) / (-negativeResizedWidth2 + topgapoverconv);
                                var30 = (smallX[currentShotIndex] - resizedWidth) / (doubleResizedWidth - resizedWidth);
                                if (var30 < var32) {
                                    // Above object?

                                    var30 = (var32 * -negativeResizedWidth + smallX[currentShotIndex]) / (resizedWidth + var32 * -negativeResizedWidth + var32 * (doubleResizedWidth - resizedWidth));
                                    var16 = var30 * resizedWidth;
                                    var18 = topgapoverconv;
                                    var34 = smallX[currentShotIndex] - var16;
                                    var36 = smallY[currentShotIndex] - var18;
                                    var4 = Math.atan(var36 / var34);
                                    if (var34 > 0.0) {
                                        var4 -= Math.PI;
                                    }

                                    var38 = Math.sqrt(var34 * var34 + var36 * var36) + 100.0;
                                    var8 = var38 * 0.06 * Math.cos(var4);
                                    var10 = var38 * 0.06 * Math.sin(var4);
                                    var12 = 5.0 * Math.sin(-var4);
                                    var14 = 5.0 * Math.cos(-var4);
                                    var40[0] = Math.floor(var16 * resizeRatio);
                                    var40[1] = Math.floor((var16 + var8 + var12) * resizeRatio);
                                    var40[2] = Math.floor((var16 + var8 - var12) * resizeRatio);
                                    var41[0] = Math.floor(var18 * resizeRatio);
                                    var41[1] = Math.floor((var18 + var10 + var14) * resizeRatio);
                                    var41[2] = Math.floor((var18 + var10 - var14) * resizeRatio);
                                    ctx.fillStyle = formatColor(teamColours[currentShotIndex]);
                                    fillPolygon(ctx, var40, var41, 3);
                                    ctx.fillStyle = 'green';
                                    if (isDebug && isExtraDebug && currentStation == currentShotIndex) {
                                        ctx.fillText("UP 1:" + var30 + "," + var32, canvasWidth / 2, 280);
                                    }
                                } else {
                                    // Off screen above + right

                                    var32 = (var30 * (-negativeResizedWidth2 + topgapoverconv) + smallY[currentShotIndex] - topgapoverconv) / (resizedHeight - topgapoverconv - bottomgapoverconv + var30 * (-negativeResizedWidth2 + topgapoverconv) + var30 * (resizedHeightPlusWidth - resizedHeight + bottomgapoverconv));
                                    var16 = resizedWidth;
                                    var18 = var32 * (resizedHeight - bottomgapoverconv - topgapoverconv) + topgapoverconv;
                                    var34 = smallX[currentShotIndex] - var16;
                                    var36 = smallY[currentShotIndex] - var18;
                                    var4 = Math.atan(var36 / var34) - Math.PI;
                                    var38 = Math.sqrt(var34 * var34 + var36 * var36) + 100.0;
                                    var8 = var38 * 0.06 * Math.cos(var4);
                                    var10 = var38 * 0.06 * Math.sin(var4);
                                    var12 = 5.0 * Math.sin(-var4);
                                    var14 = 5.0 * Math.cos(-var4);
                                    var40[0] = Math.floor(var16 * resizeRatio);
                                    var40[1] = Math.floor((var16 + var8 + var12) * resizeRatio);
                                    var40[2] = Math.floor((var16 + var8 - var12) * resizeRatio);
                                    var41[0] = Math.floor(var18 * resizeRatio);
                                    var41[1] = Math.floor((var18 + var10 + var14) * resizeRatio);
                                    var41[2] = Math.floor((var18 + var10 - var14) * resizeRatio);
                                    ctx.fillStyle = formatColor(teamColours[currentShotIndex]);
                                    fillPolygon(ctx, var40, var41, 3);
                                    ctx.fillStyle = 'green';
                                    if (isDebug && isExtraDebug && currentStation == currentShotIndex) {
                                        ctx.fillText("RIGHT UP:" + var30 + "," + var32, canvasWidth / 2, 280);
                                    }
                                }
                            }
                        } else if (smallY[currentShotIndex] > resizedHeight - topgap / resizeRatio) {
                            if (smallX[currentShotIndex] < resizedWidth) {
                                var32 = (smallY[currentShotIndex] - (resizedHeight - bottomgapoverconv)) / (resizedHeightPlusWidth - resizedHeight - topgapoverconv);
                                var30 = -smallX[currentShotIndex] / -negativeResizedWidth;
                                if (var30 < var32) {
                                    // Below the screen

                                    var30 = (var32 * -negativeResizedWidth + smallX[currentShotIndex]) / (resizedWidth + var32 * -negativeResizedWidth + var32 * (doubleResizedWidth - resizedWidth));
                                    var16 = var30 * resizedWidth;
                                    var18 = resizedHeight - bottomgapoverconv;
                                    var34 = smallX[currentShotIndex] - var16;
                                    var36 = smallY[currentShotIndex] - var18;
                                    var4 = Math.atan(var36 / var34);
                                    if (var34 > 0.0) {
                                        var4 -= Math.PI;
                                    }

                                    var38 = Math.sqrt(var34 * var34 + var36 * var36) + 100.0;
                                    var8 = var38 * 0.06 * Math.cos(var4);
                                    var10 = var38 * 0.06 * Math.sin(var4);
                                    var12 = 5.0 * Math.sin(-var4);
                                    var14 = 5.0 * Math.cos(-var4);
                                    var40[0] = Math.floor(var16 * resizeRatio);
                                    var40[1] = Math.floor((var16 + var8 + var12) * resizeRatio);
                                    var40[2] = Math.floor((var16 + var8 - var12) * resizeRatio);
                                    var41[0] = Math.floor(var18 * resizeRatio);
                                    var41[1] = Math.floor((var18 + var10 + var14) * resizeRatio);
                                    var41[2] = Math.floor((var18 + var10 - var14) * resizeRatio);
                                    ctx.fillStyle = formatColor(teamColours[currentShotIndex]);
                                    fillPolygon(ctx, var40, var41, 3);
                                    ctx.fillStyle = 'green';
                                    if (isDebug && isExtraDebug && currentStation == currentShotIndex) {
                                        ctx.fillText("DOWN 2:" + var30 + "," + var32, canvasWidth / 2, 280);
                                    }
                                } else {
                                    var32 = (var30 * (-negativeResizedWidth2 + topgapoverconv) + smallY[currentShotIndex] - topgapoverconv) / (resizedHeight - topgapoverconv - bottomgapoverconv + var30 * (-negativeResizedWidth2 + topgapoverconv) + var30 * (resizedHeightPlusWidth - resizedHeight + bottomgapoverconv));
                                    var16 = 0.0;
                                    var18 = var32 * (resizedHeight - bottomgapoverconv - topgapoverconv) + topgapoverconv;
                                    var34 = smallX[currentShotIndex] - var16;
                                    var36 = smallY[currentShotIndex] - var18;
                                    var4 = Math.atan(var36 / var34);
                                    var38 = Math.sqrt(var34 * var34 + var36 * var36) + 100.0;
                                    var8 = var38 * 0.06 * Math.cos(var4);
                                    var10 = var38 * 0.06 * Math.sin(var4);
                                    var12 = 5.0 * Math.sin(-var4);
                                    var14 = 5.0 * Math.cos(-var4);
                                    var40[0] = Math.floor(var16 * resizeRatio);
                                    var40[1] = Math.floor((var16 + var8 + var12) * resizeRatio);
                                    var40[2] = Math.floor((var16 + var8 - var12) * resizeRatio);
                                    var41[0] = Math.floor(var18 * resizeRatio);
                                    var41[1] = Math.floor((var18 + var10 + var14) * resizeRatio);
                                    var41[2] = Math.floor((var18 + var10 - var14) * resizeRatio);
                                    ctx.fillStyle = formatColor(teamColours[currentShotIndex]);
                                    fillPolygon(ctx, var40, var41, 3);
                                    ctx.fillStyle = 'green';
                                    if (isDebug && isExtraDebug && currentStation == currentShotIndex) {
                                        ctx.fillText("LEFT DOWN:" + var30 + "," + var32, canvasWidth / 2, 280);
                                    }
                                }
                            } else {
                                var32 = (smallY[currentShotIndex] - (resizedHeight - bottomgapoverconv)) / (resizedHeightPlusWidth - resizedHeight - topgapoverconv);
                                var30 = (smallX[currentShotIndex] - resizedWidth) / (doubleResizedWidth - resizedWidth);
                                if (var30 < var32) {
                                    var30 = (var32 * -negativeResizedWidth + smallX[currentShotIndex]) / (resizedWidth + var32 * -negativeResizedWidth + var32 * (doubleResizedWidth - resizedWidth));
                                    var16 = var30 * resizedWidth;
                                    var18 = resizedHeight - bottomgapoverconv;
                                    var34 = smallX[currentShotIndex] - var16;
                                    var36 = smallY[currentShotIndex] - var18;
                                    var4 = Math.atan(var36 / var34);
                                    if (var34 > 0.0) {
                                        var4 -= Math.PI;
                                    }

                                    var38 = Math.sqrt(var34 * var34 + var36 * var36) + 100.0;
                                    var8 = var38 * 0.06 * Math.cos(var4);
                                    var10 = var38 * 0.06 * Math.sin(var4);
                                    var12 = 5.0 * Math.sin(-var4);
                                    var14 = 5.0 * Math.cos(-var4);
                                    var40[0] = Math.floor(var16 * resizeRatio);
                                    var40[1] = Math.floor((var16 + var8 + var12) * resizeRatio);
                                    var40[2] = Math.floor((var16 + var8 - var12) * resizeRatio);
                                    var41[0] = Math.floor(var18 * resizeRatio);
                                    var41[1] = Math.floor((var18 + var10 + var14) * resizeRatio);
                                    var41[2] = Math.floor((var18 + var10 - var14) * resizeRatio);
                                    ctx.fillStyle = formatColor(teamColours[currentShotIndex]);
                                    fillPolygon(ctx, var40, var41, 3);
                                    ctx.fillStyle = 'green';
                                    if (isDebug && isExtraDebug && currentStation == currentShotIndex) {
                                        ctx.fillText("DOWN 1:" + var30 + "," + var32, canvasWidth / 2, 280);
                                    }
                                } else {
                                    var32 = (var30 * (-negativeResizedWidth2 + topgapoverconv) + smallY[currentShotIndex] - topgapoverconv) / (resizedHeight - topgapoverconv - bottomgapoverconv + var30 * (-negativeResizedWidth2 + topgapoverconv) + var30 * (resizedHeightPlusWidth - resizedHeight + bottomgapoverconv));
                                    var16 = resizedWidth;
                                    var18 = var32 * (resizedHeight - bottomgapoverconv - topgapoverconv) + topgapoverconv;
                                    var34 = smallX[currentShotIndex] - var16;
                                    var36 = smallY[currentShotIndex] - var18;
                                    var4 = Math.atan(var36 / var34) - Math.PI;
                                    var38 = Math.sqrt(var34 * var34 + var36 * var36) + 100.0;
                                    var8 = var38 * 0.06 * Math.cos(var4);
                                    var10 = var38 * 0.06 * Math.sin(var4);
                                    var12 = 5.0 * Math.sin(-var4);
                                    var14 = 5.0 * Math.cos(-var4);
                                    var40[0] = Math.floor(var16 * resizeRatio);
                                    var40[1] = Math.floor((var16 + var8 + var12) * resizeRatio);
                                    var40[2] = Math.floor((var16 + var8 - var12) * resizeRatio);
                                    var41[0] = Math.floor(var18 * resizeRatio);
                                    var41[1] = Math.floor((var18 + var10 + var14) * resizeRatio);
                                    var41[2] = Math.floor((var18 + var10 - var14) * resizeRatio);
                                    ctx.fillStyle = formatColor(teamColours[currentShotIndex]);
                                    fillPolygon(ctx, var40, var41, 3);
                                    ctx.fillStyle = 'green';
                                    if (isDebug && isExtraDebug && currentStation == currentShotIndex) {
                                        ctx.fillText("RIGHT DOWN:" + var30 + "," + var32, canvasWidth / 2, 280);
                                    }
                                }
                            }
                        } else if (smallX[currentShotIndex] < 0.0) {
                            // Off screen to the left

                            var30 = -smallX[currentShotIndex] / -negativeResizedWidth;
                            var32 = (var30 * (-negativeResizedWidth2 + topgapoverconv) + smallY[currentShotIndex] - topgapoverconv) / (resizedHeight - topgapoverconv - bottomgapoverconv + var30 * (-negativeResizedWidth2 + topgapoverconv) + var30 * (resizedHeightPlusWidth - resizedHeight + bottomgapoverconv));
                            ctx.fillStyle = 'green';
                            if (isDebug && isExtraDebug && currentStation == currentShotIndex) {
                                ctx.fillText("LEFT:" + var30 + "," + var32, canvasWidth / 2, 280);
                            }

                            var16 = 0.0;
                            var18 = var32 * (resizedHeight - bottomgapoverconv - topgapoverconv) + topgapoverconv;
                            var34 = smallX[currentShotIndex] - var16;
                            var36 = smallY[currentShotIndex] - var18;
                            var4 = Math.atan(var36 / var34);
                            var38 = Math.sqrt(var34 * var34 + var36 * var36) + 100.0;
                            var8 = var38 * 0.06 * Math.cos(var4);
                            var10 = var38 * 0.06 * Math.sin(var4);
                            var12 = 5.0 * Math.sin(-var4);
                            var14 = 5.0 * Math.cos(-var4);
                            var40[0] = Math.floor(var16 * resizeRatio);
                            var40[1] = Math.floor((var16 + var8 + var12) * resizeRatio);
                            var40[2] = Math.floor((var16 + var8 - var12) * resizeRatio);
                            var41[0] = Math.floor(var18 * resizeRatio);
                            var41[1] = Math.floor((var18 + var10 + var14) * resizeRatio);
                            var41[2] = Math.floor((var18 + var10 - var14) * resizeRatio);
                            ctx.fillStyle = formatColor(teamColours[currentShotIndex]);
                            fillPolygon(ctx, var40, var41, 3);
                        } else if (smallX[currentShotIndex] > resizedWidth) {
                            // Off screen to the right

                            var30 = (smallX[currentShotIndex] - resizedWidth) / (doubleResizedWidth - resizedWidth);
                            var32 = (var30 * (-negativeResizedWidth2 + topgapoverconv) + smallY[currentShotIndex] - topgapoverconv) / (resizedHeight - topgapoverconv - bottomgapoverconv + var30 * (-negativeResizedWidth2 + topgapoverconv) + var30 * (resizedHeightPlusWidth - resizedHeight + bottomgapoverconv));
                            var16 = resizedWidth;
                            var18 = var32 * (resizedHeight - bottomgapoverconv - topgapoverconv) + topgapoverconv;
                            var34 = smallX[currentShotIndex] - var16;
                            var36 = smallY[currentShotIndex] - var18;
                            var4 = Math.atan(var36 / var34) - Math.PI;
                            var38 = Math.sqrt(var34 * var34 + var36 * var36) + 100.0;
                            var8 = var38 * 0.06 * Math.cos(var4);
                            var10 = var38 * 0.06 * Math.sin(var4);
                            var12 = 5.0 * Math.sin(-var4);
                            var14 = 5.0 * Math.cos(-var4);
                            var40[0] = Math.floor(var16 * resizeRatio);
                            var40[1] = Math.floor((var16 + var8 + var12) * resizeRatio);
                            var40[2] = Math.floor((var16 + var8 - var12) * resizeRatio);
                            var41[0] = Math.floor(var18 * resizeRatio);
                            var41[1] = Math.floor((var18 + var10 + var14) * resizeRatio);
                            var41[2] = Math.floor((var18 + var10 - var14) * resizeRatio);
                            ctx.fillStyle = formatColor(teamColours[currentShotIndex]);
                            fillPolygon(ctx, var40, var41, 3);
                            ctx.fillStyle = 'green';
                            if (isDebug && isExtraDebug && currentStation == currentShotIndex) {
                                ctx.fillText("RIGHT:" + var30 + "," + var32, canvasWidth / 2, 280);
                            }
                        }
                    }
                }
            }

            // Station explosion

            for (let i = 0; i < numberOfStations; ++i) {
                if (currentStatus[i] == 2) {
                    if (currentExplosion[i] <= 5.0) {
                        ctx.fillStyle = formatColor(teamColours[i]);
                        fillOval(ctx, (stationX[i] * resizeRatio) - stationRadius[i], (stationY[i] * resizeRatio) - stationRadius[i], stationRadius[i] * 2, stationRadius[i] * 2);
                        ctx.fillStyle = teamColours[i].darker();
                        fillOval(ctx, (stationX[i] * resizeRatio) - stationRadius[i], (stationY[i] * resizeRatio) - stationRadius[i], stationRadius[i] * 2, stationRadius[i] * 2, 90, 180);
                        ctx.fillStyle = formatColor(teamColours[i]);
                        fillOval(ctx, (stationX[i] * resizeRatio - (stationRadius[i] / 2)), (stationY[i] * resizeRatio) - stationRadius[i], stationRadius[i], stationRadius[i] * 2, 90, 180);
                        ctx.fillStyle = ctx.strokeStyle = teamColours[i].darker();
                        drawOval(ctx, (stationX[i] * resizeRatio - stationRadius[i] + 1.0), (stationY[i] * resizeRatio) - 1, 2 * stationRadius[i] - 2, stationRadius[i] / 3, 0, -180);
                        fillOval(ctx, (stationX[i] * resizeRatio) - stationRadius[i] / 10, (stationY[i] * resizeRatio) - (stationRadius[i] * 0.8), (stationRadius[i] * 0.8), (stationRadius[i] * 0.8));
                    } else if (currentExplosion[i] < 35.0 && currentExplosion[i] > 5.0) {
                        let var43 = currentExplosion[i] - 5.0 - (currentExplosion[i] - 5.0) * (currentExplosion[i] - 5.0) / 40.0;
                        ctx.fillStyle = formatColor([(245.0 - (currentExplosion[i] - 5.0)), (125.0 - 2.0 * (currentExplosion[i] - 5.0)), 0]);
                        fillOval(ctx, (stationX[i] * resizeRatio - stationRadius[i] * var43), (stationY[i] * resizeRatio - stationRadius[i] * var43), ((stationRadius[i] * 2) * var43), ((stationRadius[i] * 2) * var43));
                        ctx.fillStyle = formatColor([(255.0 - 2.0 * (currentExplosion[i] - 5.0)), (255.0 - 4.0 * (currentExplosion[i] - 5.0)), 0]);
                        fillOval(ctx, (stationX[i] * resizeRatio - 0.9 * stationRadius[i] * var43), (stationY[i] * resizeRatio - 0.9 * stationRadius[i] * var43), (stationRadius[i] * 1.8 * var43), (stationRadius[i] * 1.8 * var43));
                        ctx.fillStyle = formatColor([(255.0 - 0.9 * (currentExplosion[i] - 5.0)), (255.0 - 2.2 * (currentExplosion[i] - 5.0)), (125.0 - 2.0 * (currentExplosion[i] - 5.0))]);
                        fillOval(ctx, (stationX[i] * resizeRatio - 0.8 * stationRadius[i] * var43), (stationY[i] * resizeRatio - 0.8 * stationRadius[i] * var43), (stationRadius[i] * 1.6 * var43), (stationRadius[i] * 1.6 * var43));
                        ctx.fillStyle = formatColor([(255.0 - 0.6 * (currentExplosion[i] - 5.0)), (255.0 - 1.2 * (currentExplosion[i] - 5.0)), (255.0 - 4.0 * (currentExplosion[i] - 5.0))]);
                        fillOval(ctx, (stationX[i] * resizeRatio - 0.6 * stationRadius[i] * var43), (stationY[i] * resizeRatio - 0.6 * stationRadius[i] * var43), (stationRadius[i] * 1.2 * var43), (stationRadius[i] * 1.2 * var43));
                        ctx.fillStyle = formatColor([(255.0 - 0.4 * (currentExplosion[i] - 5.0)), (255.0 - 0.8 * (currentExplosion[i] - 5.0)), (255.0 - 2.0 * (currentExplosion[i] - 5.0))]);
                        fillOval(ctx, (stationX[i] * resizeRatio - 0.3 * stationRadius[i] * var43), (stationY[i] * resizeRatio - 0.3 * stationRadius[i] * var43), (stationRadius[i] * 0.6 * var43), (stationRadius[i] * 0.6 * var43));
                    }
                }
            }

            // Other hit explosion

            for (let i = 0; i < numberOfStations; ++i) {
                if (shotStatus[i] == 2 && shotExp[i] <= 10.0) {
                    let var43 = 3.0 * (shotExp[i] - shotExp[i] * shotExp[i] / 20.0);
                    ctx.fillStyle = ([255 - 10 * shotExp[i], 0, 0]).darker();
                    fillOval(ctx, (someXval1[i] * resizeRatio - resizedTailCircleRadius[i] * var43), (someYval1[i] * resizeRatio - resizedTailCircleRadius[i] * var43), ((resizedTailCircleRadius[i] * 2) * var43), ((resizedTailCircleRadius[i] * 2) * var43));
                    ctx.fillStyle = formatColor([255 - 10 * shotExp[i], 0, 0]);
                    fillOval(ctx, (someXval1[i] * resizeRatio) - (0.8 * resizedTailCircleRadius[i] * var43), (someYval1[i] * resizeRatio) - (0.8 * resizedTailCircleRadius[i] * var43), (resizedTailCircleRadius[i] * 1.6 * var43), (resizedTailCircleRadius[i] * 1.6 * var43));
                    ctx.fillStyle = formatColor([255 - 10 * shotExp[i], 124 - 5 * shotExp[i], 0]);
                    fillOval(ctx, (someXval1[i] * resizeRatio) - (0.6 * resizedTailCircleRadius[i] * var43), (someYval1[i] * resizeRatio) - (0.6 * resizedTailCircleRadius[i] * var43), (resizedTailCircleRadius[i] * 1.2 * var43), (resizedTailCircleRadius[i] * 1.2 * var43));
                    ctx.fillStyle = formatColor([255 - 10 * shotExp[i], 255 - 10 * shotExp[i], 0]);
                    fillOval(ctx, (someXval1[i] * resizeRatio) - (0.4 * resizedTailCircleRadius[i] * var43), (someYval1[i] * resizeRatio) - (0.4 * resizedTailCircleRadius[i] * var43), (resizedTailCircleRadius[i] * 0.8 * var43), (resizedTailCircleRadius[i] * 0.8 * var43));
                }
            }

            let currentTxt;

            // Title screen

            if (showTitleScreen != 0) {
                currentTxt = "D E A T H   S T A R   B A T T L E S";
                ctx.font = secondFont;
                ctx.fillStyle = 'white';
                ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, 20 + 10 + topgap);
                ctx.font = firstFont;
                currentTxt = "V1.7.0 (c) 2001 - Ian Bolland   ian@mammoththoughts.com   www.gravitybattles.com ";
                ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, (getCanvasSize().height - 20) / 6 + 10 + topgap);
                currentTxt = "                                                                                                ";
                ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, getCanvasSize().height - 16 * 20 + 10);
                currentTxt = "Take it in turns to fire at each other by adjusting the angle and power using the sliders below.";
                ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, getCanvasSize().height - 14 * 20 + 10);
                currentTxt = "When you are happy with the angle and power, press the end turn button to let the next player go.";
                ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, getCanvasSize().height - 12 * 20 + 10);
                currentTxt = "All player's shots will then be fired. All shots are effected by the gravity of the stars and planets.";
                ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, getCanvasSize().height - 10 * 20 + 10);
                currentTxt = "If things get sticky, the hyperspace button will transport you to a random location.";
                ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, getCanvasSize().height - 8 * 20 + 10);
                currentTxt = "The last surviving team wins, press the start button at any time to start again.";
                ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, getCanvasSize().height - 6 * 20 + 10);
                currentTxt = "Set the various options by clicking the buttons above and then press the start button to begin.";
                ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, getCanvasSize().height - 4 * 20 + 10);
            }

            if (currentMode == 0 && showTitleScreen == 0) {
                // Started

                ctx.font = secondFont;

                // Display winner

                if (currentWinner == -1 && tornamentmode == 0) {
                    ctx.fillStyle = 'black';
                    fillRect(ctx, 0, 0, var45.width, var45.height);
                    ctx.fillStyle = 'white';
                    currentTxt = "N o b o d y    W i n s ! ";
                    ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, (getCanvasSize().height - 20) / 2 + 10);
                } else if (currentWinner > -1 && tornamentmode == 0) {
                    if (currentStationsPerPlayer == 1) {
                        ctx.fillStyle = 'black';
                        fillRect(ctx, 0, 0, var45.width, var45.height);
                        ctx.fillStyle = formatColor(teamColours[currentWinner]);
                        currentTxt = "P l a y e r   " + (currentWinner + 1) + "   w i n s !";
                        ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, (getCanvasSize().height - 20) / 2 + 10);
                    } else if (currentStationsPerPlayer > 1) {
                        ctx.fillStyle = 'black';
                        fillRect(ctx, 0, 0, var45.width, var45.height);
                        ctx.fillStyle = formatColor(teamColours[currentWinner]);
                        currentTxt = "T e a m   " + (teams[currentWinner] + 1) + "   w i n s !";
                        ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, (getCanvasSize().height - 20) / 2 + 10);
                    }
                }

                // Tournament mode

                if (currentWinner != -2 && tornamentmode == 1 && gameNumber != 0) {
                    if (currentWinner == -1) {
                        ctx.fillStyle = 'black';
                        fillRect(ctx, 0, 0, var45.width, var45.height);
                        ctx.fillStyle = 'white';
                        currentTxt = "Nobody wins game " + gameNumber;
                        ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, 20 + 10 + topgap);
                    } else if (currentWinner > -1 && currentStationsPerPlayer == 1) {
                        ctx.fillStyle = 'black';
                        fillRect(ctx, 0, 0, var45.width, var45.height);
                        ctx.fillStyle = formatColor(teamColours[currentWinner]);
                        currentTxt = "Player " + (currentWinner + 1) + " wins game " + gameNumber;
                        ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, 20 + 10 + topgap);
                    } else if (currentWinner > -1 && currentStationsPerPlayer > 1) {
                        ctx.fillStyle = 'black';
                        fillRect(ctx, 0, 0, var45.width, var45.height);
                        ctx.fillStyle = formatColor(teamColours[currentWinner]);
                        currentTxt = "Team " + (teams[currentWinner] + 1) + " wins game " + gameNumber;
                        ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, 20 + 10 + topgap);
                    }

                    ctx.font = firstFont;
                    let var47 = (currentStationsPerPlayer > 1) ? "Team " : "Player ";
                    let var48 = "1st";

                    for (var56 = 0; var56 < numberOfTeams; ++var56) {
                        if (var56 > 0 && (playerData8[s[var56]] != playerData8[s[var56 - 1]] || Math.round((100 * playerData13[s[var56]]) / (playerShots[s[var56]] + 1.0E-6)) != Math.round((100 * playerData13[s[var56 - 1]]) / (playerShots[s[var56 - 1]] + 1.0E-6)))) {
                            if (var56 == 1) {
                                var48 = "2nd";
                            } else if (var56 == 2) {
                                var48 = "3rd";
                            } else if (var56 > 2) {
                                var48 = var56 + 1 + "th";
                            }
                        }

                        let var49 = (playerData13[s[var56]] == 1) ? '' : "s";
                        let var50 = (playerData15[s[var56]] == 1) ? '' : "s";
                        let var51 = (playerData14[s[var56]] == 1) ? '' : 's';

                        ctx.fillStyle = formatColor(teamColoursColour[s[var56]]);
                        currentTxt = var48 + "   " + var47 + (s[var56] + 1) + "     " + Math.round((100 * playerData13[s[var56]]) / (playerShots[s[var56]] + 1.0E-6)) + "% accuracy   " + playerData15[s[var56]] + " win" + var50 + "   " + playerData13[s[var56]] + " kill" + var49 + "   " + playerData14[s[var56]] + " surviver" + var51 + "     TOTAL SCORE = " + playerData8[s[var56]];
                        if (numberOfTeams > 4) {
                            ctx.fillText(currentTxt, (canvasWidth - ctx.measureText(currentTxt).width) / 2, 20 + 80 + var56 * ((canvasHeight - 120 - 20) / numberOfTeams));
                        } else {
                            ctx.fillText(currentTxt, (canvasWidth - ctx.measureText(currentTxt).width) / 2, 20 + 100 + var56 * ((canvasHeight - 220 - 20) / numberOfTeams));
                        }

                        ctx.fillStyle = 'white';
                        currentTxt = "Click to continue with tornament or select start to begin a new tornament";
                        ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, canvasHeight - 10 - bottomgap);
                    }
                } else if (currentWinner == -2 && hyperspaceCount[activePlayer] == 0) {
                    if (activePlayer < numberOfStations) {
                        if (currentStationsPerPlayer == 1) {
                            currentTxt = "P l a y e r   " + (activePlayer + 1);
                        } else {
                            currentTxt = "T e a m   " + (teams[activePlayer] + 1) + "    S t a t i o n   " + (stations[activePlayer] + 1);
                        }

                        ctx.fillStyle = 'black';
                        ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2 + 3, 20 + 10 + topgap + 3);
                        ctx.fillStyle = formatColor(teamColours[activePlayer]);
                        ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, 20 + 10 + topgap);
                    }

                    if (ais[activePlayer] > 0 && activePlayer < numberOfStations) {
                        currentTxt = "Thinking...";
                        ctx.fillStyle = 'black';
                        ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2 + 3, canvasHeight - 10 - bottomgap + 3);
                        ctx.fillStyle = 'white';
                        ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, canvasHeight - 10 - bottomgap);
                    } else if (ais[activePlayer] == 0 && activePlayer < numberOfStations) {
                        if (currentHyperspace[activePlayer] == 1) {
                            drawRect(ctx, (resizeRatio * stationX[activePlayer]) - f[activePlayer], (resizeRatio * stationY[activePlayer]) - f[activePlayer], 2 * f[activePlayer], 2 * f[activePlayer]);
                            currentTxt = "Hyperspacing...";
                            ctx.fillStyle = 'black';
                            ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2 + 3, canvasHeight - 10 - bottomgap + 3);
                            ctx.fillStyle = 'white';
                            ctx.fillText(currentTxt, (getCanvasSize().width - ctx.measureText(currentTxt).width) / 2, canvasHeight - 10 - bottomgap);
                        } else {
                            ctx.fillStyle = ctx.strokeStyle = teamColours[activePlayer].darker();
                            if (teleports[activePlayer] == 0) {
                                drawPolygon(ctx, shotTailX[activePlayer], shotTailY[activePlayer], pathl[activePlayer]);
                            } else {
                                drawPolygon(ctx, shotTailX[activePlayer], shotTailY[activePlayer], nTeleports[activePlayer][0]);

                                for (var56 = 1; var56 < teleports[activePlayer]; ++var56) {
                                    for (var57 = 0; var57 < nTeleports[activePlayer][var56] - nTeleports[activePlayer][var56 - 1]; ++var57) {
                                        PZ[var57] = shotTailX[activePlayer][var57 + nTeleports[activePlayer][var56 - 1]];
                                        QZ[var57] = shotTailY[activePlayer][var57 + nTeleports[activePlayer][var56 - 1]];
                                    }

                                    drawPolygon(ctx, PZ, QZ, nTeleports[activePlayer][var56] - nTeleports[activePlayer][var56 - 1]);
                                }

                                for (var57 = 0; var57 < pathl[activePlayer] - nTeleports[activePlayer][teleports[activePlayer] - 1]; ++var57) {
                                    PZ[var57] = shotTailX[activePlayer][var57 + nTeleports[activePlayer][teleports[activePlayer] - 1]];
                                    QZ[var57] = shotTailY[activePlayer][var57 + nTeleports[activePlayer][teleports[activePlayer] - 1]];
                                }

                                drawPolygon(ctx, PZ, QZ, pathl[activePlayer] - nTeleports[activePlayer][teleports[activePlayer] - 1]);
                            }

                            ctx.fillStyle = ctx.strokeStyle = 'white';
                            drawOval(ctx, (resizeRatio * stationX[activePlayer]) - f[activePlayer], (resizeRatio * stationY[activePlayer]) - f[activePlayer], 2 * f[activePlayer], 2 * f[activePlayer]);
                            drawLine(ctx, (resizeRatio * stationX[activePlayer]), (resizeRatio * stationY[activePlayer]), (resizeRatio * stationX[activePlayer] + (j[activePlayer] + (f[activePlayer] - j[activePlayer]) * (currentPower[activePlayer] - 1) / 800) * Math.sin(currentAngle[activePlayer] / 180.0 * Math.PI)), (resizeRatio * stationY[activePlayer] + (j[activePlayer] + (f[activePlayer] - j[activePlayer]) * (currentPower[activePlayer] - 1) / 800) * Math.cos(currentAngle[activePlayer] / 180.0 * Math.PI)));
                            currentTxt = currentPower[activePlayer] > 800 ? "Power:100" : `Power: ${currentPower[activePlayer] / 10.0 + ((1000.0 * zeroPoint2 - 1.0)) / 10.0}`;

                            ctx.fillStyle = 'black';
                            ctx.fillText(currentTxt, getCanvasSize().width - ctx.measureText("Power:10.0").width + 3, canvasHeight - 10 - bottomgap + 3);
                            ctx.fillStyle = (currentPower[activePlayer] == lastPower[activePlayer]) ? 'yellow' : 'white';

                            ctx.fillText(currentTxt, getCanvasSize().width - ctx.measureText("Power:10.0").width, canvasHeight - 10 - bottomgap);
                            ctx.fillStyle = 'black';
                            if (currentAngle[activePlayer] > 180) {
                                ctx.fillText("Angle:" + (540 - currentAngle[activePlayer]), 13, canvasHeight - 10 - bottomgap + 3);
                            } else {
                                ctx.fillText("Angle:" + (180 - currentAngle[activePlayer]), 13, canvasHeight - 10 - bottomgap + 3);
                            }

                            if (currentAngle[activePlayer] == lastAngle[activePlayer]) {
                                ctx.fillStyle = 'yellow';
                            } else {
                                ctx.fillStyle = 'white';
                            }

                            if (currentAngle[activePlayer] > 180) {
                                ctx.fillText("Angle:" + (540 - currentAngle[activePlayer]), 10, canvasHeight - 10 - bottomgap);
                            } else {
                                ctx.fillText("Angle:" + (180 - currentAngle[activePlayer]), 10, canvasHeight - 10 - bottomgap);
                            }
                        }
                    }
                }
            }

            /* DEBUG INFO */

            if (isDebug && isExtraDebug) {
                ctx.font = firstFont;
                ctx.fillStyle = 'blue';

                for (let i = 0; i < numberOfPlanets; ++i) {
                    fillOval(ctx, (planetX[i] * resizeRatio) - 2, (planetY[i] * resizeRatio) - 2, 4, 4);
                    ctx.fillText((planetNumber[i]).toString(), (planetX[i] * resizeRatio), (planetY[i] * resizeRatio));
                }

                ctx.fillStyle = ctx.strokeStyle = formatColor([255, 0, 255]);
                fillOval(ctx, (stationX[currentStation] * resizeRatio) - 4, (stationY[currentStation] * resizeRatio) - 4, 8, 8);
                ctx.fillText("Player " + currentStation, (stationX[currentStation] * resizeRatio), (stationY[currentStation] * resizeRatio));
                drawOval(ctx, (smallX[currentStation] * resizeRatio) - 6, (smallY[currentStation] * resizeRatio) - 6, 12, 12);
                drawLine(ctx, canvasWidth / 4, canvasHeight / 2, (smallX[currentStation] * resizeRatio), (smallY[currentStation] * resizeRatio));
                drawLine(ctx, 3 * canvasWidth / 4, canvasHeight / 2, (smallX[currentStation] * resizeRatio), (smallY[currentStation] * resizeRatio));
                ctx.fillStyle = 'green';
                if (focusedFirstGo) {
                    ctx.fillText("Focused firstgo:" + showTitleScreen, 20, 80);
                } else {
                    ctx.fillText("Not Focused firstgo:" + showTitleScreen, 20, 80);
                }

                ctx.fillText("Screen:" + canvasWidth + "x" + canvasHeight + " conv:" + resizeRatio, 20, 100);
                ctx.fillText("Game:" + resizedWidth + "x" + resizedHeight, 20, 120);
                ctx.fillText("Mode:" + currentMode + " timestep:" + timeStep + " Checkactive:" + checkActive, 20, 140);
                ctx.fillText("Game:" + gameNumber + " Turn:" + currentTurn + " Hyperspacing:" + hyperSpacing, 20, 160);
                ctx.fillText("Step:" + currentStep + "," + prtUpper + "/" + prtLower * shwEvery + " prt,shw every:" + shwEvery + "," + everyTen, 20, 180);
                ctx.fillText("Winner:" + currentWinner + " Stations:" + numberOfStations + " Teams:" + numberOfTeams, 20, 200);
                ctx.fillText("Planets:" + numberOfPlanets + " totalmass:" + totalMass, 20, 220);
                ctx.fillText("Scenario:" + scenario + " tornamentmode:" + tornamentmode, 20, 240);
                if (paused && slowMo) {
                    ctx.fillText("Paused STEPPING keydown(" + keyDown + ")", 20, 260);
                } else if (paused && !slowMo) {
                    ctx.fillText("Paused   keydown(" + keyDown + ")", 20, 260);
                } else {
                    ctx.fillText("Not Paused   keydown(" + keyDown + ")", 20, 260);
                }

                ctx.fillText("MIN top h,w" + gridLayout1MinHeight + "," + gridLayout1MinWidth + " bottom h,w" + gridLayout2MinHeight + "," + gridLayout2MinWidth, 20, 280);
                ctx.fillText("PREF top h,w" + gridLayout1PreferredHeight + "," + gridLayout1PreferredWidth + " bottom h,w" + gridLayout2PreferredHeight + "," + gridLayout2PreferredWidth, 20, 300);
                ctx.fillText("topgap" + topgap + " bottomgap" + bottomgap, 20, 320);
                ctx.fillText("bottomgapoverconv" + bottomgapoverconv, 20, 340);
                ctx.fillText("topteam:" + topTeam + " bottomteam:" + k, 20, 360);
                ctx.fillText("winningteam:" + winningTeam + " losingteam:" + h, 20, 380);
                ctx.fillText("freearea:" + freeArea, 20, 400);
                ctx.fillText("topgapoverconv" + topgapoverconv, 20, 420);
                ctx.fillText("oppression:" + oppression + "bloodlust:" + bloodlust, 20, 440);
                ctx.fillText("Drawtime:" + drawTime + " delaytime" + delaytime, 20, 460);
                ctx.fillText("Station:" + currentStation + " team:" + teams[currentStation] + " AI:" + ais[currentStation], canvasWidth / 2, 80);
                ctx.fillText("Status:" + currentStatus[currentStation] + " shotstatus:" + shotStatus[currentStation], canvasWidth / 2, 100);
                ctx.fillText("Hyperspace:" + currentHyperspace[currentStation] + " count:" + hyperspaceCount[currentStation], canvasWidth / 2, 120);
                ctx.fillText("Explosion:" + currentExplosion[currentStation] + " Shot Exp:" + shotExp[currentStation], canvasWidth / 2, 140);
                ctx.fillText("Turns:" + playerTurn[currentStation] + " Kills:" + kills[currentStation] + " Shots:" + shots[currentStation] + " Survives:" + survives[currentStation], canvasWidth / 2, 160);
                ctx.fillText("Owngoals:" + ownGoals[currentStation] + " Suicides:" + suicides[currentStation] + " killedby:" + killedby[currentStation], canvasWidth / 2, 180);
                ctx.fillText("Accuracy:" + kills[currentStation] / (shots[currentStation] + 1.0E-7), canvasWidth / 2, 200);
                ctx.fillText("Angle:" + currentAngle[currentStation] + " Power:" + currentPower[currentStation], canvasWidth / 2, 220);
                ctx.fillText("Last Angle:" + lastAngle[currentStation] + "Last Power:" + lastPower[currentStation], canvasWidth / 2, 240);
                ctx.fillText("X:" + stationX[currentStation] + " Y:" + stationY[currentStation] + " x:" + smallX[currentStation] + " y:" + smallY[currentStation], canvasWidth / 2, 260);
                ctx.fillText("totalpower:" + totalPower[currentStation] + " vengencekills:" + vengencekills[currentStation] + " strategykills:" + strategykills[currentStation], canvasWidth / 2, 300);
                ctx.fillText("tacticskills:" + tacticsKills[currentStation] + " bullykills:" + bullykills[currentStation] + " opressionkills:" + opressionkills[currentStation], canvasWidth / 2, 320);
                ctx.fillText("longshotkills:" + longshotkills[currentStation] + " closeshotkills:" + closeshotkills[currentStation], canvasWidth / 2, 340);
                ctx.fillText("Iradius:" + resizedTailCircleRadius[currentStation] + " stationIradius:" + stationRadius[currentStation], canvasWidth / 2, 360);
                ctx.fillText("lastdisp:" + lastdisp[currentStation] + "pathl:" + pathl[currentStation], canvasWidth / 2, 380);
                ctx.fillText("teleports:" + teleports[currentStation] + "t0:" + nTeleports[currentStation][0] + "t1:" + nTeleports[currentStation][1] + "t2:" + nTeleports[currentStation][2] + "t3:" + nTeleports[currentStation][3], canvasWidth / 2, 400);
            }

            finishedDrawing = 1;
            drawTime = Date.now() - timeStartOfUpdate;
        }
    } catch (e) {
        console.error(e);
    }
}

function gravityapplet() {
    planetType = numOfPlanetTypes + 1;
    numberOfPlanets = maxNumOfPlanets + 1;
    currentStationsPerPlayer = 1;
    numberOfTeams = 2;
    numberOfStations = numberOfTeams * currentStationsPerPlayer;
    numOfPlanets = maxNumOfPlanets + 1;
    stationsPerPlayer = 1;
    totalPlayers = 2;
    humanPlayers = 1;
    cpuType = 3;
    buttonState = 1;
    stationType = 4;
    currentNumberOfStations = 1;
    maxButtonStates = 2;
    nextGaussian = 3;
    randomStationType = 4;
    focusedFirstGo = false;
    isDebug = false;
    isExtraDebug = false;
    setValue = 1;
    sin = 30;
    // sleep = new Scrollbar(0, 1, 90, 1, 450);
    // sqrt = new Scrollbar(0, 1, 199, 1, 1000);
    // start = new Panel();
    // stop = new Panel();
    // gridLayout1 = new GridLayout(1, 6);
    // tolet = new GridLayout(1, 3);

    updateBtn = document.getElementById('update'); // Start game
    updateBtn.addEventListener('click', () => {
        if (buttonState == 1) {
            showTitleScreen = 0;
            somethingLikeStarted2 = 1;
            tornamentmode = 0;
            gameNumber = 0;
            paused = false;
            if (startType == 1) {
                tornamentmode = 1;
                gameNumber = 0;
                return;
            }

            return;
        }

        if (buttonState == 2) {
            showTitleScreen = 0;
            somethingLikeStarted2 = 1;
            tornamentmode = 0;
            gameNumber = 0;
            paused = false;
            if (startType == 1) {
                tornamentmode = 1;
                gameNumber = 0;
                return;
            }
        }
    })
    valueOf = document.getElementById('valueOf'); // <x> players
    valueOf.textContent = numberOfStations + ' players';
    valueOf.addEventListener('click', () => {
        if (buttonState == 1) {
            ++totalPlayers;
            if (totalPlayers > maxPlayers) {
                totalPlayers = 2;
            }

            valueOf.textContent = totalPlayers + " players";
            if (humanPlayers > totalPlayers) {
                Z.textContent = totalPlayers + " human 0 cpu";
            } else {
                Z.textContent = humanPlayers + " human " + (totalPlayers - humanPlayers) + " cpu";
            }

            if (totalPlayers * stationsPerPlayer > maxPlayers) {
                white.textContent = Math.floor(maxPlayers / totalPlayers) + " stations/player";
                return;
            }

            white.textContent = stationsPerPlayer + " stations/player";
            return;
        }

        if (buttonState == 2) {
            ++startType;
            if (startType > 1) {
                startType = 0;
            }

            if (startType == 0) {
                valueOf.textContent = "Single game";
            } else if (startType == 1) {
                valueOf.textContent = "Tornament";
            }

            if (startType == 0) {
                update.textContent = "Start Game";
                return;
            }

            if (startType == 1) {
                update.textContent = "Start Tornament";
                return;
            }
        }
    })
    white = document.getElementById('white'); // Stations / player
    white.textContent = currentStationsPerPlayer + ' stations/player';
    white.addEventListener('click', () => {
        if (buttonState == 1) {
            ++stationsPerPlayer;
            if (stationsPerPlayer * totalPlayers > maxPlayers) {
                stationsPerPlayer = 1;
            }

            white.textContent = stationsPerPlayer + " stations/player";
            return;
        }

        if (buttonState == 2) {
            ++numOfPlanets;
            if (numOfPlanets > maxNumOfPlanets + 2) {
                numOfPlanets = 0;
            }

            if (numOfPlanets < maxNumOfPlanets + 1) {
                white.textContent = numOfPlanets + " planets";
                return;
            }

            if (numOfPlanets == maxNumOfPlanets + 1) {
                white.textContent = "random (max 8)";
                return;
            }

            if (numOfPlanets == maxNumOfPlanets + 2) {
                white.textContent = "random (max " + maxNumOfPlanets + ")";
                return;
            }
        }
    })
    yellow = document.getElementById('yellow'); // CPU
    yellow.addEventListener('click', () => {
        if (buttonState == 1) {
            ++cpuType;
            if (cpuType > numOfCpuTypes) {
                cpuType = 1;
            }

            if (cpuType == 1) {
                yellow.textContent = "Cpu: randbot";
                return;
            }

            if (cpuType == 2) {
                yellow.textContent = "Cpu: aimbot";
                return;
            }

            if (cpuType == 3) {
                yellow.textContent = "Cpu: cleverbot";
                return;
            }

            if (cpuType == 4) {
                yellow.textContent = "Cpu: superbot";
                return;
            }

            if (cpuType == 5) {
                yellow.textContent = "Cpu: megabot";
                return;
            }

            if (cpuType == 6) {
                yellow.textContent = "Cpu: godbot";
                return;
            }

            return;
        }

        if (buttonState == 2) {
            ++planetType;
            if (planetType > numOfPlanetTypes + 1) {
                planetType = 1;
            }

            if (planetType == 1) {
                yellow.textContent = "planetary";
                return;
            }

            if (planetType == 2) {
                yellow.textContent = "asteroids";
                return;
            }

            if (planetType == 3) {
                yellow.textContent = "star system";
                return;
            }

            if (planetType == 4) {
                yellow.textContent = "binary system";
                return;
            }

            if (planetType == 5) {
                yellow.textContent = "jovian";
                return;
            }

            if (planetType == 6) {
                yellow.textContent = "supergiant";
                return;
            }

            if (planetType == 7) {
                yellow.textContent = "super binary";
                return;
            }

            if (planetType == 8) {
                yellow.textContent = "uneven binary";
                return;
            }

            if (planetType == 9) {
                yellow.textContent = "red giant";
                return;
            }

            if (planetType == 10) {
                yellow.textContent = "star cluster";
                return;
            }

            if (planetType == 11) {
                yellow.textContent = "mixture";
                return;
            }

            if (planetType == 12) {
                yellow.textContent = "white dwarf";
                return;
            }

            if (planetType == 13) {
                yellow.textContent = "wormhole";
                return;
            }

            if (planetType == 14) {
                yellow.textContent = "dwarfs";
                return;
            }

            if (planetType == 15) {
                yellow.textContent = "black hole";
                return;
            }

            if (planetType == 16) {
                yellow.textContent = "black holes";
                return;
            }

            if (planetType == 17) {
                yellow.textContent = "wormholes";
                return;
            }

            if (planetType == 18) {
                yellow.textContent = "big wormhole";
                return;
            }

            if (planetType == 19) {
                yellow.textContent = "white hole";
                return;
            }

            if (planetType == 20) {
                yellow.textContent = "white holes";
                return;
            }

            if (planetType == 21) {
                yellow.textContent = "hyperspace";
                return;
            }

            if (planetType == 22) {
                yellow.textContent = "lucky dip";
                return;
            }
        }
    })
    Z = document.getElementById('Z');
    Z.addEventListener('click', () => {
        if (buttonState == 1) { // Normal buttons
            ++humanPlayers;
            if (humanPlayers > totalPlayers) {
                humanPlayers = 0;
            }

            Z.textContent = humanPlayers + " human " + (totalPlayers - humanPlayers) + " cpu";
            return;
        }

        if (buttonState == 2) { // More option buttons
            ++stationType;
            if (stationType > numOfStationTypes + 1) {
                stationType = 1;
            }

            if (stationType == 1) {
                Z.textContent = "micro stations";
                return;
            }

            if (stationType == 2) {
                Z.textContent = "tiny stations";
                return;
            }

            if (stationType == 3) {
                Z.textContent = "small stations";
                return;
            }

            if (stationType == 4) {
                Z.textContent = "medium stations";
                return;
            }

            if (stationType == 5) {
                Z.textContent = "large stations";
                return;
            }

            if (stationType == 6) {
                Z.textContent = "giant stations";
                return;
            }

            if (stationType == 7) {
                Z.textContent = "random size";
                return;
            }
        }
    })
    C = document.getElementById('C'); // More options
    C.addEventListener('click', () => {
        ++buttonState;
        if (buttonState > maxButtonStates) {
            buttonState = 1;
        }

        if (buttonState == 1) {
            if (startType == 0) {
                update.textContent = "Start Game";
            }

            if (startType == 1) {
                update.textContent = "Start Tornament";
            }

            valueOf.textContent = totalPlayers + " players";
            if (humanPlayers > totalPlayers) {
                Z.textContent = totalPlayers + " human 0 cpu";
            } else {
                Z.textContent = `${humanPlayers} human ${totalPlayers - humanPlayers} cpu`;
            }

            if (totalPlayers * stationsPerPlayer > maxPlayers) {
                white.textContent = Math.floor(maxPlayers / totalPlayers) + " stations/player";
            } else {
                white.textContent = stationsPerPlayer + " stations/player";
            }

            if (cpuType == 1) {
                yellow.textContent = "Cpu: randbot";
                return;
            }

            if (cpuType == 2) {
                yellow.textContent = "Cpu: aimbot";
                return;
            }

            if (cpuType == 3) {
                yellow.textContent = "Cpu: cleverbot";
                return;
            }

            if (cpuType == 4) {
                yellow.textContent = "Cpu: superbot";
                return;
            }

            if (cpuType == 5) {
                yellow.textContent = "Cpu: megabot";
                return;
            }

            if (cpuType == 6) {
                yellow.textContent = "Cpu: godbot";
                return;
            }

            return;
        }

        if (buttonState == 2) {
            if (startType == 0) {
                update.textContent = "Start Game";
            } else if (startType == 1) {
                update.textContent = "Start Tornament";
            }

            if (startType == 0) {
                valueOf.textContent = "Single game";
            } else if (startType == 1) {
                valueOf.textContent = "Tornament";
            }

            if (stationType == 1) {
                Z.textContent = "micro stations";
            }

            if (stationType == 2) {
                Z.textContent = "tiny stations";
            } else if (stationType == 3) {
                Z.textContent = "small stations";
            } else if (stationType == 4) {
                Z.textContent = "medium stations";
            } else if (stationType == 5) {
                Z.textContent = "large stations";
            } else if (stationType == 6) {
                Z.textContent = "giant stations";
            } else if (stationType == 7) {
                Z.textContent = "random size";
            }

            if (numOfPlanets < maxNumOfPlanets + 1) {
                white.textContent = numOfPlanets + " planets";
            } else if (numOfPlanets == maxNumOfPlanets + 1) {
                white.textContent = "random (max 8)";
            } else if (numOfPlanets == maxNumOfPlanets + 2) {
                white.textContent = "random (max " + maxNumOfPlanets + ")";
            }

            if (planetType == 1) {
                yellow.textContent = "planetary";
                return;
            }

            if (planetType == 2) {
                yellow.textContent = "asteroids";
                return;
            }

            if (planetType == 3) {
                yellow.textContent = "star system";
                return;
            }

            if (planetType == 4) {
                yellow.textContent = "binary system";
                return;
            }

            if (planetType == 5) {
                yellow.textContent = "jovian";
                return;
            }

            if (planetType == 6) {
                yellow.textContent = "supergiant";
                return;
            }

            if (planetType == 7) {
                yellow.textContent = "super binary";
                return;
            }

            if (planetType == 8) {
                yellow.textContent = "uneven binary";
                return;
            }

            if (planetType == 9) {
                yellow.textContent = "red giant";
                return;
            }

            if (planetType == 10) {
                yellow.textContent = "star cluster";
                return;
            }

            if (planetType == 11) {
                yellow.textContent = "mixture";
                return;
            }

            if (planetType == 12) {
                yellow.textContent = "white dwarf";
                return;
            }

            if (planetType == 13) {
                yellow.textContent = "wormhole";
                return;
            }

            if (planetType == 14) {
                yellow.textContent = "dwarfs";
                return;
            }

            if (planetType == 15) {
                yellow.textContent = "black hole";
                return;
            }

            if (planetType == 16) {
                yellow.textContent = "black holes";
                return;
            }

            if (planetType == 17) {
                yellow.textContent = "wormholes";
                return;
            }

            if (planetType == 18) {
                yellow.textContent = "big wormhole";
                return;
            }

            if (planetType == 19) {
                yellow.textContent = "white hole";
                return;
            }

            if (planetType == 20) {
                yellow.textContent = "white holes";
                return;
            }

            if (planetType == 21) {
                yellow.textContent = "hyperspace";
                return;
            }

            if (planetType == 22) {
                yellow.textContent = "lucky dip";
                return;
            }

            return;
        }

        if (buttonState == 3) {
            update.textContent = "";
            valueOf.textContent = "";
            Z.textContent = "";
            white.textContent = "";
            yellow.textContent = "";
            return;
        }
    })
    B = document.getElementById('B');  // Hyperspace
    B.addEventListener('click', () => {
        if (isInHyperspaceMaybe == 1) {
            if (currentHyperspace[activePlayer] == 0) {
                currentHyperspace[activePlayer] = 1;
            } else {
                currentHyperspace[activePlayer] = 0;
            }

            // sleep(100);
        }
    })
    D = document.getElementById('D'); // End turn
    D.addEventListener('click', () => {
        if (isInHyperspaceMaybe == 1 && showTitleScreen == 0 && currentWinner == -2) {
            ++activePlayer;

            while (activePlayer < numberOfStations && currentStatus[activePlayer] != 1) {
                ++activePlayer;
            }

            if (activePlayer < numberOfStations) {
                angleSlider.value = (360 - currentAngle[activePlayer]);
                powerSlider.value = currentPower[activePlayer];

                // sleep(100);
            }
        }
    });

    angleSlider = document.getElementById('angle');
    angleSlider.addEventListener('input', adjustmentValueChanged)
    powerSlider = document.getElementById('power');
    powerSlider.addEventListener('input', adjustmentValueChanged)

    window.addEventListener('keydown', keyPressed);
    window.addEventListener('keyup', keyReleased);

    showTitleScreen = 1;
    resizeRatio = 1.0;

    planetColours = new Array(3);
    for (let temp = 0; temp < maxNumOfPlanets + 1; temp++) planetColours[temp] = new Array(3);
    planetX = new Array(maxNumOfPlanets + 1);
    planetY = new Array(maxNumOfPlanets + 1);
    planetWidthMaybe = new Array(maxNumOfPlanets + 1);
    resizedPlanetWidthMaybe = new Array(maxNumOfPlanets + 1);
    drawingPlanetType = new Array(maxNumOfPlanets + 1);
    planetNumber = new Array(maxNumOfPlanets + 1);
    planetGravityMaybe = new Array(maxNumOfPlanets + 1);
    R = new Array(maxNumOfPlanets + 1);
    planetDoubleNumber = new Array(maxNumOfPlanets + 1);
    teamColours = new Array(maxPlayers + 1);
    teamColoursColour = new Array(maxPlayers + 1);
    stationX = new Array(maxPlayers + 1);
    stationY = new Array(maxPlayers + 1);
    i = new Array(maxPlayers + 1);
    z = new Array(maxPlayers + 1);
    c = new Array(maxPlayers + 1);
    hyperspaceCount = new Array(maxPlayers + 1);
    stationRadius = new Array(maxPlayers + 1);
    f = new Array(maxPlayers + 1);
    j = new Array(maxPlayers + 1);
    s = new Array(maxPlayers + 1);
    topTeam = -1;
    winningTeam = -1;
    h = -1;
    k = -1;
    l = 64;
    m = 38;
    teleports = new Array(maxPlayers + 1);
    nTeleports = new Array(maxPlayers + 1);
    for (let temp = 0; temp < maxPlayers + 1; temp++) nTeleports[temp] = new Array(n + 1);
    q = 0.6;
    r = 0.2;
    totalPower = new Array(maxPlayers + 1);
    vengencekills = new Array(maxPlayers + 1);
    strategykills = new Array(maxPlayers + 1);
    tacticsKills = new Array(maxPlayers + 1);
    bullykills = new Array(maxPlayers + 1);
    opressionkills = new Array(maxPlayers + 1);
    longshotkills = new Array(maxPlayers + 1);
    closeshotkills = new Array(maxPlayers + 1);
    playerTurn = new Array(maxPlayers + 1);
    ownGoals = new Array(maxPlayers + 1);
    suicides = new Array(maxPlayers + 1);
    kills = new Array(maxPlayers + 1);
    shots = new Array(maxPlayers + 1);
    killedby = new Array(maxPlayers + 1);
    survives = new Array(maxPlayers + 1);
    playerData9 = new Array(maxPlayers + 1);
    playerData15 = new Array(maxPlayers + 1);
    unused1 = new Array(maxPlayers + 1);
    playerData10 = new Array(maxPlayers + 1);
    playerData11 = new Array(maxPlayers + 1);
    playerData13 = new Array(maxPlayers + 1);
    playerShots = new Array(maxPlayers + 1);
    playerData14 = new Array(maxPlayers + 1);
    playerData8 = new Array(maxPlayers + 1);
    currentStatus = new Array(maxPlayers + 1);
    UI = new Array(maxPlayers + 1);
    currentExplosion = new Array(maxPlayers + 1);
    teams = new Array(maxPlayers + 1);
    stations = new Array(maxPlayers + 1);
    currentHyperspace = new Array(maxPlayers + 1);
    currentAngle = new Array(maxPlayers + 1);
    currentPower = new Array(maxPlayers + 1);
    lastAngle = new Array(maxPlayers + 1);
    lastPower = new Array(maxPlayers + 1);
    lastdisp = new Array(maxPlayers + 1);
    fI = new Array(maxPlayers + 1);
    for (let temp = 0; temp < maxPlayers + 1; temp++) {
        fI[temp] = new Array(maxPlayers + 1);
        for (let temp2 = 0; temp2 < maxPlayers + 1; temp2++) {
            fI[temp][temp2] = 0;
        }
    }
    jI = new Array(maxPlayers + 1);
    for (let temp = 0; temp < maxPlayers + 1; temp++) {
        jI[temp] = new Array(maxPlayers + 1);
        for (let temp2 = 0; temp2 < maxPlayers + 1; temp2++) {
            jI[temp][temp2] = 0;
        }
    }
    ais = new Array(maxPlayers + 1);
    eI = new Array(maxPlayers + 1);
    smallX = new Array(maxPlayers + 1);
    smallY = new Array(maxPlayers + 1);
    someXval1 = new Array(maxPlayers + 1);
    someYval1 = new Array(maxPlayers + 1);
    someXval2 = new Array(maxPlayers + 1);
    someYval2 = new Array(maxPlayers + 1);
    someXval3 = new Array(maxPlayers + 1);
    someYval3 = new Array(maxPlayers + 1);
    someXval4 = new Array(maxPlayers + 1);
    someYval4 = new Array(maxPlayers + 1);
    tailCircleRadius = new Array(maxPlayers + 1);
    resizedTailCircleRadius = new Array(maxPlayers + 1);
    shotExp = new Array(maxPlayers + 1);
    somePowerTimesSin = new Array(maxPlayers + 1);
    somePowerTimesCos = new Array(maxPlayers + 1);
    shotStatus = new Array(maxPlayers + 1);

    dataIsReset = 1;
    drawing2 = 1;

    SZ = 2000;
    polygonNPoints = 1000;
    EZ = 100;
    polygonXPoints = new Array(polygonNPoints);
    polygonYPoints = new Array(polygonNPoints);
    KZ = new Array(SZ + 1);
    LZ = new Array(SZ + 1);
    MZ = new Array(SZ + 1);
    shotTailX = new Array(maxPlayers + 1);
    for (let temp = 0; temp < maxPlayers + 1; temp++) shotTailX[temp] = new Array(prtLower + 500);
    shotTailY = new Array(maxPlayers + 1);
    for (let temp = 0; temp < maxPlayers + 1; temp++) shotTailY[temp] = new Array(prtLower + 500);
    PZ = new Array(prtLower + 500);
    QZ = new Array(prtLower + 500);
    pathl = new Array(maxPlayers + 1);
    WZ = new Array(SZ);
    // XZ = NumberFormat.getInstance();

    onePoint0 = 1.0;
    ratioZeroPoint8 = 0.8;
    zeroPoint2 = 0.2;
    fourPoint0 = 4.0;
    eightPoint0 = 8.0;
}