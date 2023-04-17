//myapp/static/js/script.js
$(document).ready(function(){
    $('#create').on('click', function(){
        
        $userid = $('#userid').val();
        $name = $('#name').val();
        $gender = $('#gender').val();
        $email = $('#email').val();
        $role = $('#role').val();
        
  
        if($userid == "" || $name == "" || $gender == "" || $email == "" ||$role == "" ){
            alert("Please complete the required field");
        }else{
            
            $.ajax({
                url: 'create/',
                type: 'POST',
                data: {
                    userid: $userid,
                    name: $name,
                    gender: $gender,
                    email: $email,
                    role: $role,
                    
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function(){
                    alert("New Member Successfully Added");
                    window.location = '/user';
                    
                }
            });
        }
    });
  
});
$(document).on('click', '.edit', function(){
    
    $id = $(this).attr('name');
    window.location = "edit/" + $id;



});

    $('#update').on('click', function(){
        $userid = $('#userid').val();
        $name = $('#name').val();
        $gender = $('#gender').val();
        $email = $('#email').val();
        $role = $('#role').val();
       

    if($userid == "" || $name == "" || $gender == "" || $email == "" ||$role == "" ){
        alert("Please complete the required field");
    }else{
        
        $id = $('#member_id').val();
        $.ajax({
            url: 'update/' + $id,
            type: 'POST',
            data: {
                userid: $userid,
                name: $name,
                gender: $gender,
                email: $email,
                role: $role,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(){
                window.location = '/user';
                alert('Updated!');
            }
        });
    }

});



$(document).on('click', '.delete', function(){
    $id = $(this).attr('name');
    $.ajax({
        url: 'delete/' + $id,
        type: 'POST',
        data: {
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(){
            window.location = '/user';    
            alert("Deleted!");
        }
    });
});

$(document).ready(function(){

    // Search all columns
    $('#txt_searchall').keyup(function(){
        // Search Text
        var search = $(this).val();

        // Hide all table tbody rows
        $('table tbody tr').hide();

        // Count total search result
        var len = $('table tbody tr:not(.notfound) td:contains("'+search+'")').length;

        if(len > 0){
          // Searching text in columns and show match row
          $('table tbody tr:not(.notfound) td:contains("'+search+'")').each(function(){
              $(this).closest('tr').show();
          });
        }else{
          $('.notfound').show();
        }
        
    });
});
            //Print
$(function () {
    $('button[type="button"]').click(function () {
        var pageTitle = 'User List',
            stylesheet = 'static/assets/css/soft-ui-dashboard.css',
            win = window.open('', 'Print', 'width=500,height=300');
        win.document.write('<html><head><title>' + pageTitle + '</title>' +
            '<link rel="stylesheet" href="' + stylesheet + '">' +
            '</head><body>' + $('.table')[0].outerHTML + '</body></html>');
        win.document.close();
        win.print();
        win.close();
        return false;
    });
});

        //Pagination
    // get the table element
var $table = document.getElementById("myTable"),
// number of rows per page
$n = 5,
// number of rows of the table
$rowCount = $table.rows.length,
// get the first cell's tag name (in the first row)
$firstRow = $table.rows[0].firstElementChild.tagName,
// boolean var to check if table has a head row
$hasHead = ($firstRow === "TH"),
// an array to hold each row
$tr = [],
// loop counters, to start count from rows[1] (2nd row) if the first row has a head tag
$i,$ii,$j = ($hasHead)?1:0,
// holds the first row if it has a (<TH>) & nothing if (<TD>)
$th = ($hasHead?$table.rows[(0)].outerHTML:"");
// count the number of pages
var $pageCount = Math.ceil($rowCount / $n);
// if we had one page only, then we have nothing to do ..
if ($pageCount > 1) {
	// assign each row outHTML (tag name & innerHTML) to the array
	for ($i = $j,$ii = 0; $i < $rowCount; $i++, $ii++)
		$tr[$ii] = $table.rows[$i].outerHTML;
	// create a div block to hold the buttons
	$table.insertAdjacentHTML("afterend","<div id='buttons'></div");
	// the first sort, default page is the first one
	sort(1);
}

// ($p) is the selected page number. it will be generated when a user clicks a button
function sort($p) {
	/* create ($rows) a variable to hold the group of rows
	** to be displayed on the selected page,
	** ($s) the start point .. the first row in each page, Do The Math
	*/
	var $rows = $th,$s = (($n * $p)-$n);
	for ($i = $s; $i < ($s+$n) && $i < $tr.length; $i++)
		$rows += $tr[$i];
	
	// now the table has a processed group of rows ..
	$table.innerHTML = $rows;
	// create the pagination buttons
	document.getElementById("buttons").innerHTML = pageButtons($pageCount,$p);
	// CSS Stuff
	document.getElementById("id"+$p).setAttribute("class","act");
}


// ($pCount) : number of pages,($cur) : current page, the selected one ..
function pageButtons($pCount,$cur) {
	/* this variables will disable the "Prev" button on 1st page
	   and "next" button on the last one */
	var	$prevDis = ($cur == 1)?"disabled":"",
		$nextDis = ($cur == $pCount)?"disabled":"",
		/* this ($buttons) will hold every single button needed
		** it will creates each button and sets the onclick attribute
		** to the "sort" function with a special ($p) number..
		*/
		$buttons = "<input type='button' value='<< Prev' onclick='sort("+($cur - 1)+")' "+$prevDis+">";
	for ($i=1; $i<=$pCount;$i++)
		$buttons += "<input type='button' id='id"+$i+"'value='"+$i+"' onclick='sort("+$i+")'>";
	$buttons += "<input type='button' value='Next >>' onclick='sort("+($cur + 1)+")' "+$nextDis+">";
	return $buttons;
}




