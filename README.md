# TEST_APP
This is an app filled with hours of mindless testing and DUMB stuff.

So your 2 Apps are distinguised

It's a bit messy. I will be cleaning it up more as we go here. But piecing all this trash together was a wreck. So here's the dealio:
  
   1. The React App is under the 'CLIENT' folder.
   2. The 'test' folder is the NodeJS/ExpressJS server.
   3. The 'server' folder was a test and is null for right now.

Basically, cd into each folder of the app, and fire them up on local host after installing each folders dependencies using npm install.

To launch the React app, run the command npm run start.

To launch the Node server, you will have to use 1 of 2 options:
  
  1. Ideally, you will want to use "nodemon" an npm module helper. Installing it can be a bit tricky. It should be listed as a dependency, but even then, it's a bit rough to have it actaully work sometimes (idk why, whether I installed it globally or even sudo -g, I couldn't get it to run).
      IF ALL ELSE FAILS: INSTALL IT LOCALLY TO THE FOLDER USING npx nodemon. This should work.
      
  2. Your other option is to use a command like "node app.js" or w/e your main folder is to then crank it up on a local host. However, when making changes to the server, you would have to stop and restart the server every single time. HENCE nodemon. 

So after you fire up both of these, you should be able to make it go! I just realized I left my creds in there for my db. BUT, i suppose it's all good. I should be leaving it up so all can access if needed.

I could go on for days, but I can't rn lolol. 
