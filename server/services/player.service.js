
// models
const Player = require('../models/Player');
const User = require('../models/User');

module.exports = {
  createPlayer
}

/**
 * Create player.
 * @param {object} playerData an object that represents a player.
 * @returns A Promise or exception.
 */
async function createPlayer(playerData) {
  const player = new Player(playerData);
  const user = await User.findById(playerData.user);

  // check if user exists 
  if(!user) {
    throw 'User id "' + playerData.user + '" not found'; 
  }

  // check if a player is already connected
  if(user.roles.player) {
    throw 'User id "' + playerData.user + '" is already connected to player id "' + user.roles.player + '"';
  }

  // update user with player
  user.roles.player = player.id;
  await user.save();

  return await player.save();
}
