
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.3",
    "basePath": "./",
    "info": {
      "title": "Projet ACROBATT",
      "version": "1.0.0",
      "description": "This is a REST API application made with Express.",
      "license": {
        "name": " ",
        "url": " "
      },
      "contact": {
        "name": "HelloWorld",
        "url": "hello@world.org"
      }
    },
    "servers": [
      {
        "url": "http://localhost:8080/",
        "description": "Development server"
      }
    ],
    "paths": {
      "/travel/{idTravel}/diary": {
        "post": {
          "summary": "Store an entry in DB.",
          "tags": [
            "diary"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Diary"
                }
              }
            }
          },
          "responses": {
            "201": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "Get all entries from BDD.",
          "tags": [
            "diary"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/Success"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/diary/{id}": {
        "put": {
          "summary": "Update an entry.",
          "tags": [
            "diary"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Diary"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/responses/Success"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "delete": {
          "summary": "Delete an entry in DB.",
          "tags": [
            "diary"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/Success"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "Get an entry from DB.",
          "tags": [
            "diary"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/Success"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/document": {
        "post": {
          "summary": "Store an entry in DB.",
          "tags": [
            "document"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "requestBody": {
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "file": {
                      "type": "string",
                      "format": "binary"
                    },
                    "id_element": {
                      "type": "integer",
                      "description": "id of the element which is associated to the document. It can be an interest point, a step, a trip, or the itinerary."
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "Get all documents from DB.",
          "tags": [
            "document"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/document/{id}": {
        "put": {
          "summary": "Update a document.",
          "tags": [
            "document"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Document"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "delete": {
          "summary": "Delete a document in DB.",
          "tags": [
            "document"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "Get a document from DB.",
          "tags": [
            "document"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/interestpoint": {
        "post": {
          "summary": "store a point in BDD.",
          "tags": [
            "interestpoint"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Interestpoint"
                }
              }
            }
          },
          "responses": {
            "201": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "get all interestpoints for a travel.",
          "tags": [
            "interestpoint"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/interestpoint/{id}": {
        "put": {
          "summary": "update an interestpoint.",
          "tags": [
            "interestpoint"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Interestpoint"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "delete": {
          "summary": "delete a point in BDD.",
          "tags": [
            "interestpoint"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "get a point from BDD.",
          "tags": [
            "interestpoint"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/interestpoint/{id}/step/{idStep}": {
        "get": {
          "summary": "associate an existing interestpoint to an existing step.",
          "tags": [
            "interestpoint"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            },
            {
              "$ref": "#/parameters/idstep"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/photo": {
        "post": {
          "summary": "Store a photo in DB.",
          "tags": [
            "photo"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Photo"
                }
              }
            }
          },
          "responses": {
            "201": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "Get all photos from DB.",
          "tags": [
            "photo"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/photo/{id}": {
        "put": {
          "summary": "Update a photo in DB.",
          "tags": [
            "photo"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Photo"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "delete": {
          "summary": "Delete a photo from DB.",
          "tags": [
            "photo"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "Get a photo from DB.",
          "tags": [
            "photo"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/step": {
        "post": {
          "summary": "store a point in BDD.",
          "tags": [
            "step"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Step"
                }
              }
            }
          },
          "responses": {
            "201": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "get all steps for a travel.",
          "tags": [
            "step"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/step/{id}": {
        "put": {
          "summary": "update an step.",
          "tags": [
            "step"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Step"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "delete": {
          "summary": "delete a point in BDD.",
          "tags": [
            "step"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "get a point from BDD.",
          "tags": [
            "step"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/step/{id}/interestpoint": {
        "get": {
          "summary": "get all interestpoint for a travel and a step.",
          "tags": [
            "step"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/task": {
        "post": {
          "summary": "store a point in BDD.",
          "tags": [
            "task"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              }
            }
          },
          "responses": {
            "201": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "get all tasks for a travel.",
          "tags": [
            "task"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/task/{id}": {
        "put": {
          "summary": "update an task.",
          "tags": [
            "task"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "delete": {
          "summary": "delete a point in BDD.",
          "tags": [
            "task"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "get a point from BDD.",
          "tags": [
            "task"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/task/{id}/tag/{idTag}": {
        "post": {
          "summary": "associate tag to task.",
          "tags": [
            "task"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            },
            {
              "$ref": "#/parameters/idtag"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/tasklisttag": {
        "post": {
          "summary": "store a tasklisttag in BDD.",
          "tags": [
            "tasklisttag"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskListTag"
                }
              }
            }
          },
          "responses": {
            "201": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "put": {
          "summary": "update a tasklisttag.",
          "tags": [
            "tasklisttag"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskListTag"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/tasklisttag/{id}": {
        "delete": {
          "summary": "delete a tasklisttag in BDD.",
          "tags": [
            "tasklisttag"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "get a tasklisttag from BDD.",
          "tags": [
            "tasklisttag"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel": {
        "post": {
          "summary": "store a travel in BDD.",
          "tags": [
            "travel"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Travel"
                }
              }
            }
          },
          "responses": {
            "201": {
              "$ref": "#/responses/Success"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "put": {
          "summary": "update a travel.",
          "tags": [
            "travel"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Travel"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/responses/Success"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "find all points from DB",
          "tags": [
            "travel"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/Success"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{id}": {
        "delete": {
          "summary": "delete a Travel in BDD.",
          "tags": [
            "travel"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/Success"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "get a travel from BDD.",
          "tags": [
            "travel"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/Success"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/trip": {
        "post": {
          "summary": "store a point in BDD.",
          "tags": [
            "trip"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Trip"
                }
              }
            }
          },
          "responses": {
            "201": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "put": {
          "summary": "update an step.",
          "tags": [
            "trip"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Trip"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "find all points from DB",
          "tags": [
            "trip"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      },
      "/travel/{idTravel}/trip/{id}": {
        "delete": {
          "summary": "delete a Trip in BDD.",
          "tags": [
            "trip"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        },
        "get": {
          "summary": "get a point from BDD.",
          "tags": [
            "trip"
          ],
          "parameters": [
            {
              "$ref": "#/parameters/idtravel"
            },
            {
              "$ref": "#/parameters/idobject"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/SuccessCreation"
            },
            "400": {
              "$ref": "#/responses/BadRequest"
            },
            "406": {
              "$ref": "#/responses/NotAcceptable"
            }
          }
        }
      }
    },
    "responses": {
      "SuccessCreation": {
        "description": "Object successfully created",
        "schema": {
          "$ref": "#/components/schemas/Diary"
        }
      },
      "Success": {
        "description": "Operation done successfully"
      },
      "NotAcceptable": {
        "description": "The object is not valid, validation error, data constraints error, empty or invalid object fields"
      },
      "BadRequest": {
        "description": "Empty or incomplete object, missing url parameters, others."
      }
    },
    "parameters": {
      "idtravel": {
        "in": "path",
        "name": "idTravel",
        "type": "integer",
        "required": true,
        "description": "the ID of the travel"
      },
      "idobject": {
        "in": "path",
        "name": "id",
        "type": "integer",
        "required": true,
        "description": "the ID of the object"
      },
      "idstep": {
        "in": "path",
        "name": "idStep",
        "type": "integer",
        "required": true,
        "description": "the ID of the step containing the interestpoint"
      },
      "idtag": {
        "in": "path",
        "name": "idTag",
        "type": "integer",
        "required": true,
        "description": "the ID of the tag to associate to the task"
      }
    },
    "components": {
      "schemas": {
        "Diary": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "content": {
              "type": "string",
              "description": "text from diary entry"
            },
            "is_in_album": {
              "type": "boolean",
              "description": "set true if the diary is included in album"
            },
            "id_travel": {
              "type": "integer",
              "description": "id of the associated travel"
            }
          }
        },
        "Document": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "required": true
            },
            "path": {
              "type": "string",
              "description": "path of the file"
            },
            "name": {
              "type": "string",
              "description": "name of the file"
            },
            "id_element": {
              "type": "integer",
              "required": true,
              "description": "id of the element which is associated to the document. It can be an interest point, a step, a trip, or the itinerary."
            }
          }
        },
        "Element": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string",
              "description": "name of element"
            },
            "description": {
              "type": "string"
            },
            "id_travel": {
              "type": "integer"
            },
            "predicted_date": {
              "type": "string",
              "format": "date"
            }
          }
        },
        "Interestpoint": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "element": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/Element"
                }
              ]
            },
            "point": {
              "$ref": "#/components/schemas/Point"
            },
            "order": {
              "type": "integer"
            }
          }
        },
        "Point": {
          "type": "object",
          "description": "GeoJSon geometry",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Point"
              ]
            },
            "coordinates": {
              "$ref": "#/components/schemas/Point2D"
            }
          }
        },
        "Point2D": {
          "type": "array",
          "maxItems": 2,
          "minItems": 2,
          "items": {
            "type": "number"
          }
        },
        "Photo": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "point": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/Point"
                }
              ]
            },
            "path": {
              "type": "string"
            },
            "is_in_album": {
              "type": "boolean"
            },
            "is_public": {
              "type": "boolean"
            }
          }
        },
        "Step": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "element": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/Element"
                }
              ]
            },
            "point": {
              "$ref": "#/components/schemas/Point"
            },
            "order": {
              "type": "integer"
            },
            "duration": {
              "type": "integer"
            }
          }
        },
        "Task": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string",
              "description": "name of task"
            },
            "is_terminated": {
              "type": "boolean"
            },
            "id_element": {
              "type": "integer",
              "description": "id of the element linked to the task"
            },
            "id_task_list": {
              "type": "integer",
              "description": "id of the list of tasks of the travel"
            }
          }
        },
        "TaskListTag": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string",
              "description": "name of tasklisttag"
            }
          }
        },
        "Itinerary": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "element_itinerary": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/Element"
                }
              ]
            }
          }
        },
        "Travel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "commentary": {
              "type": "string"
            },
            "is_finished": {
              "type": "boolean"
            },
            "is_public": {
              "type": "boolean"
            }
          }
        },
        "Trip": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "element": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/Element"
                }
              ]
            },
            "id_departure_step": {
              "type": "integer"
            },
            "id_arrival_step": {
              "type": "integer"
            },
            "id_itinerary": "type:integer"
          }
        }
      }
    },
    "tags": []
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
