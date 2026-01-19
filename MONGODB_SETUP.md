# MongoDB Atlas Setup Guide

## Step 1: Create Database User
1. Go to MongoDB Atlas Dashboard
2. Click **Security** → **Database Access**
3. Click **Add New Database User**
4. Choose **Password** authentication
5. Create username and password (save these!)
6. Set privileges to **Atlas admin** or **Read and write to any database**
7. Click **Add User**

## Step 2: Configure Network Access
1. Go to **Security** → **Network Access**
2. Click **Add IP Address**
3. Click **Allow Access from Anywhere** (0.0.0.0/0) for development
   - For production, you can restrict to specific IPs
4. Click **Confirm**

## Step 3: Get Connection String
1. Go to **Database** → **Clusters**
2. Click **Connect** on your cluster
3. Choose **Connect your application**
4. Copy the connection string
5. Replace `<username>` and `<password>` with your database user credentials
6. Add database name: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/noema?retryWrites=true&w=majority`

## Step 4: Configure for Render
1. Go to your Render dashboard
2. Select your service
3. Go to **Environment** tab
4. Add environment variable:
   - **Key**: `MONGODB_URI`
   - **Value**: Your full connection string (with username, password, and database name)
5. Save changes

## Step 5: Local Development
Create a `.env` file in the project root:
```
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/noema?retryWrites=true&w=majority
ANTHROPIC_API_KEY=your_anthropic_key_here
```

**Important**: Never commit your `.env` file to git!

## Example Connection String Format
```
mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/noema?retryWrites=true&w=majority
```

Where:
- `myuser` = your database username
- `mypassword` = your database password
- `cluster0.abc123.mongodb.net` = your cluster URL
- `noema` = database name (you can change this)

## Testing the Connection
Once configured, restart your server. You should see:
- `Connected to MongoDB Atlas` if successful
- `Warning: MongoDB not connected` if there's an issue

Check your MongoDB Atlas dashboard → **Database** → **Browse Collections** to see the `interactions` collection being created automatically.
