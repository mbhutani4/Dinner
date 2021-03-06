$(function () {

    //We instantiate our model
    var model = new DinnerModel();

    // And create the instances of the views and controllers
    var sidebarDishView = new SidebarDishView($('#dinnercost'), model, this);
    var sidebarDishController = new SidebarDishController(sidebarDishView, model, this);
    var findDishView = new FindDishView($('#selectDishView'), model, this);
    var findDishController = new FindDishController(findDishView, model, this);
    var dinnerDetailsView = new DishDetailsView($('#dinnerdetailsView'), model, this);
    var dinnerDetailsController = new DinnerDetailsController(dinnerDetailsView, model, this);
    var dinnerOverviewView = new DinnerOverviewView($('#dinneroverviewView'), model, this);
    var dinnerOverviewController = new DinnerOverviewController(dinnerOverviewView, model, this);
    var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerprintoutView"), model, this);
    var dinnerPrintoutController = new DinnerPrintoutController(dinnerPrintoutView, model, this);

    $('#selectDishView').hide();
    $('#dinnerdetailsView').hide();
    $('#DinnerOverviewView').hide();
    $('#dinnerprintoutView').hide();
    $('#dinnercost').hide();


    //this works
    $('#newDinner').click(function () {
        $('#indexScreen').toggleClass('hidden');
        //$('#selectdinnerView').toggleClass('hidden');
        this.showFindDish(); //Works
    }.bind(this));


    /**
     * IMPORTANT: app.js is the only place where you are allowed to
     * use the $('someSelector') to search for elements in the whole HTML.
     * In other places you should limit the search only to the children
     * of the specific view you're working with (see exampleView.js).
     */

    this.showSidebar = function () {

    }

    this.showDishDetails = function () {
        //$('#selectdinnerView').toggleClass('hidden'); //Now it disappears
        //$('#dinnerdetailsView').toggleClass('hidden');  //Now this view has no class at all

        $('#dinnercost').show();
        $('#dinnerdetailsView').show();
        $('#selectDishView').hide();


        /*dinnerDetailsView.show();
      sidebarDishView.show();
      findDishView.hide();
      dinnerOverviewView.hide();
      dinnerPrintoutView.hide();*/
    }
    this.showFindDishAgain = function () {
        //$('#selectdinnerView').toggleClass('hidden');
        //$('#dinnerdetailsView').toggleClass('hidden');

        $('#selectDishView').show();
        $('#dinnercost').show();
        $('#dinnerdetailsView').hide();
        $('#DinnerOverviewView').hide();
        $('#dinnerprintoutView').hide();

    }

    this.showFindDish = function () {
        //$('#selectdinnerView').toggleClass('hidden'); //works
        //$('#dinnerdetailsView').toggleClass('hidden');
        $('#selectDishView').show();
        $('#dinnercost').show();

        /* $("#dinnercost").show();
         $("#selectdinnerView").show();
         $("#dinnerdetailsView").hide();
         $("#dinneroverviewView").hide();
         $("#dinnerprintoutView").hide();
         */

    }
    this.showDinnerOverview = function () {
        //$('#selectdinnerView').toggleClass('hidden');
        //$('#dinnerdetailsView').toggleClass('hidden');
        $('#DinnerOverviewView').show();
        $('#dinnercost').hide();
        $('#selectDishView').hide();
        $('#dinnerdetailsView').hide();
        $('#dinnerprintoutView').hide();

    }
    this.showDinnerPrintout = function () {
        $('#DinnerOverviewView').hide();
        $('#dinnercost').hide();
        $('#selectDishView').hide();
        $('#dinnerdetailsView').hide();
        $('#dinnerprintoutView').show();
    }


});
//});
