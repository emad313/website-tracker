

// Make a constructor function for the Tracker object
function Tracker() {
    this._trackers = [];
    this._
    }

// Add a method to the Tracker prototype
Tracker.prototype.add = function(tracker) {
    this._trackers.push(tracker);
    };

// Add a method to the Tracker prototype
Tracker.prototype.track = function() {
    for (var i = 0; i < this._trackers.length; i++) {
        this._trackers[i].track();
        }
        console.log("Tracking " + this._trackers.length + " trackers");
    };

