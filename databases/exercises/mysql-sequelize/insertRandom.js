import { UserActivity } from "./db.js";

const names = [
  'Alex Johnson',
  'Maria Garcia',
  'David Chen',
  'Sarah Williams',
  'Michael Brown',
  'Emma Davis',
  'James Wilson',
  'Lisa Anderson',
  'Robert Taylor',
  'Jennifer Martinez',
  'Christopher Lee',
  'Ashley Thompson',
  'Daniel White',
  'Jessica Harris',
  'Matthew Clark',
  'Amanda Lewis',
  'Andrew Robinson',
  'Stephanie Walker',
  'Joshua Hall',
  'Melissa Young'
];

const activities = [
  'Comment',
  'Logout',
  'Login',
  'Share',
  'Like',
  'Edit Profile',
  'Upload Photo',
  'Send Message',
  'Delete Post',
  'Create Event',
  'Join Group',
  'Leave Group',
  'Block User',
  'Report Content',
  'Change Password',
  'Update Status',
  'Add Friend',
  'Remove Friend',
  'View Profile',
  'Download File',
  'Save Post',
  'Archive Message',
  'Refresh Feed',
  'Search Users',
  'Create Poll'
];

async function createRandomActivity(){
    const randomNameInd = Math.floor(Math.random() * names.length);
    const randomActInd = Math.floor(Math.random() * activities.length);
    await UserActivity.create({
        name: names[randomNameInd],
        activity: activities[randomActInd]
    });
}

async function displayActivities() {
    const activities = await UserActivity.findAll();
    const actValues = activities.map(activity => activity.toJSON());
    console.table(actValues);
}

const creationInterval = setInterval(async () => {
    await createRandomActivity();
}, 10000);

const displayingInterval = setInterval(async () =>{
    await displayActivities();
}, 30000);