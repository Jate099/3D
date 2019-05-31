let app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
        document.body.appendChild(app.view);

        let img = new PIXI.Sprite.from("/imagenes/lol.jpg");
        img.width = window.innerWidth;
        img.height = window.innerHeight;
        app.stage.addChild(img);

        depthMap = new PIXI.Sprite.from("/imagenes/map4.jpg");
        depthMap.width = window.innerWidth;
        depthMap.height = window.innerHeight;
        app.stage.addChild(depthMap);

        displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
        app.stage.filters = [displacementFilter];

        window.onmousemove = function(e){
            displacementFilter.scale.x = (window.innerWidth/2 - e.clientX) /220;
            displacementFilter.scale.y = (window.innerHeight/2 - e.clientY) /50;
        };