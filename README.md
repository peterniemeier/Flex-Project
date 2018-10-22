# Background

Porcelain’s core application is a web/mobile app with the sole purpose of helping the user find a toilet! Users will help populate the database. We will be using the MERN stack (mongoDB, Express, React, NodeJS) to build our app.


Our project will heavily rely on the incorporattion of  Google Maps API with our app to implement real-time maps and location services to our Users.
Our server will be listening for incoming connections and will establish a connection between clients and our app when a request is made by a client.
We will be managing real-time display of changes regarding toilet information from the upstream and downstream communications between our server and the client.

Web/Mobile App
The app will be a basic landing page where the user will sign up /log in and help generate/read data. Like many review apps, our app will rely heavily on user participation and feedback to help generate/update many of our existing toilets.
Technical challenges:
Users will have a seamless experience on their mobile device, where user sign-up/sign-in, as well as toilet show pages and markers will be displayed primarily through modals, allowing users to quickly navigate and use our app without having to wait for re-rendering of our pages. This will be of the utmost importance to users who are most likely on-the-go while looking for a quick pit-stop.
Having an accurate Google Map API to guide users not only to an accurate bathroom location, but directions to get there as well.

# MVPS

## User Auth
- users sign in and sign out
- users can create an account

## Maps
- map centers on location of user or san fran
- users can see toilets near them displayed on the map
- users can click on map to create toilet
- users can create toilet at "my location"
- markers reload within the bounds of the map
- clicking marker show toilet show page

## Toilets
- crud toilets
- toilets can have an image attached
- users can search toilets by rating and distance

## Comments
- users can leave comments for toilet
- crd

## Bonus

## Directions
- Users can enter an end destination and find a toilet along the way

## Map
- has different icons based on rating
- when users click a toilet they get a pop up with more information

# Sample State

```javascript
    {
        entities: {
            users: {
                2: {
                    id: 2,
                    username: 'steve',
                }
            },
            toilets: {
                42: {
                    id: 42,
                    lat: 37.23423,
                    lng: -121.345,
                    title: 'A great toilet',
                    creator_id: 5,
                }
            },
            comments: {
                creator_id: 12,
                body: 'I took a good poop, good lock too',
                rating: 1-5,
            }
        },
        session: {
            id: 3
        },
        ui: {
            maps: {
                border: (lat, lng),
                center: (lat, lng),
            }
        }
        errors: {
            session_errors: ["Must have stuff"]
        }
    }

```

# Wireframes

![](https://github.com/peterniemeier/test/blob/master/ui1.jpg)

***


![](https://github.com/peterniemeier/test/blob/master/ui2.jpg)


***


![](https://github.com/peterniemeier/test/blob/master/ui3.jpg)

# Technologies and Challenges

## Architecture
The architecture of Porcelain  will be deployed and maintained as a desktop application that can be responsive as on the mobile.

Porcelain is built with the MERN stack (MongoDB, Express, React, and Node). It features a frontend agnostic API servicing both web and mobile in conjunction with client side rendering with React.

### Backend

The backend will be done in Node, Express, and MongoDB. With minimal relations, a NoSQL DB will be efficient for this project

The schema consists of 3 models (Users, Toilets, and Comments)

### Frontend

- The frontend will be done in React/Redux.
- Bootstrap will be used as a CSS library for responsive resizing of the view.
- Redux will be making api calls to the backend


## UI/UX

The user experience will go right to the map for the user to see the reviews of toilets closest to them.  It will be similar to Waze with a crowdsourcing interface where users will be able to contribute their own reviews by simply clicking on a coordinate on the map.

## Backend: MongoDB/Express
**Technical challenges:**
* Connecting the map markers and the data they contain to the MongoDB database
## Frontend: React/Node.js
**Technical challenges:**
* Reading data from MongoDB database and organizing for display
* Fetching data to build a marker for each toilet, bathroom
* Allowing users to easily create their own toilet with pinpoint accuracy using Google Maps API using lat/long coordinates
* Implementing effective search

# Work Breakdown
**Peter Niemeier, Austin Cotant, Anthony Tam, James Touri**

#### Oct. 22 - 23
- Deploy Google Maps **Austin**
- Login and Signup Design **Anthony**
- Toilet Model and Api **Pete**
- Toilet Components **James**

#### Oct. 24 - 25
