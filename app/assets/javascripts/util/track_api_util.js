var TrackApiUtil = window.TrackApiUtil = {
  fetch: function () {
    $.ajax({
      url: '/api/tracks',
      type: 'GET',
      dataType: 'json',
      success: function(tracks) {
        tracks.forEach(function (track) {
          TrackStore.addTrack(track);
        });
      }
    });
  },

  saveTrack: function (track) {
    var trackObj = { name: track.name, roll: track.roll };
    
    $.ajax({
      url: '/api/tracks',
      type: 'POST',
      dataType: 'json',
      data: { track: trackObj },
      success: function(track) {
        TrackStore.addTrack(track);
      },
      error: function (data) {
      }
    });
  },

  destroy: function (track_id) {
    $.ajax({
      url: '/api/tracks' + track_id,
      type: 'DELETE',
      dataType: 'json',
      success: function (track) {
        TrackStore.destroy(track);
      }
    });
  }
};
