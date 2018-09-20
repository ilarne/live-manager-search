# Live Manager Search

```
As a user,
So I can find the correct manager more quickly,
When I type a manager's name or email into search,
I should see a list of related managers
```

1. `Git clone` the repository. Once cloned, change into the directory with `cd live-manager-search` 

2. Install dependencies: `npm install`

3.  Build css: `npm run build-css`

4. Run the backend server: ```json-server db.json --port 3001```

*(N.B. the development version of the app requires the use of port 3001 for the backend server. If this is already in use please kill the process)*

5. In another terminal tab, navigate to `live-manager-search` and start app: `npm start`

*(N.B. this development version of the app requires the use of port 3000  for the app as the tests point to this URL. If this is already in use please kill the process)*

6. Integration tests: `node_modules/.bin/cypress open`
(N.B. requires application and backend server to be running)

# Implementation notes 
Some implementation notes can be found [here](https://hackmd.io/s/SJ0RjHLuX).
