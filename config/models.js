/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#/documentation/concepts/ORM
 */

module.exports.models = {

  /**
   * These setting should be written in config/env/development.js or config/env/production.js (Akihiro Yamamoto)
   */

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/
  // connection: 'localDiskDb',

  /******************************************************************************************
  *                                                                                         *
  * safe  never auto-migrate my database(s). I will do it myself, by hand.                  *
  * alter auto-migrate columns/fields, but attempt to keep my existing data (experimental)  *
  * drop  wipe/drop ALL my data and rebuild models every time I lift Sails                  *
  * http://sailsjs.org/#!/documentation/concepts/ORM/model-settings.html                    *
  *                                                                                         *
  ******************************************************************************************/
  // migrate: 'alter'
};
