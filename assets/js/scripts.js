    var Wrapper = $('div.wrapper2');
    Wrapper.find('div.note').remove();
    Wrapper.find('div > div.login-wrapper > form > div a').remove();
    Wrapper.find('div > div.login-wrapper > div.buttonjoin').remove();
    
    $('div.panel-blue').hide();
    Wrapper.find('div div.login-wrapper form div div.buttonjoin').addClass('btnLogin');
    Wrapper.find('div div.login-wrapper form div div.btnLogin input[type=submit]').val('MASUK');
    $('main div.inner-wrap').addClass('container');
    
    var ButtonDaftar = '<hr><a class="buttonWrap buttons button-blue contactSubmitButton" href="/register">DAFTAR</a>';
    
    Wrapper.find('div div.login-wrapper form div div.buttonjoin').append(ButtonDaftar);
    $('div.no-bottom footer').remove();
    
    var TabMenu = '<ul class="nav tab-menu nav-pills" id="pills-tab" role="tablist">';
    $.each(ItemMenu, function( index, value ) {
      var MenuActive = (index === 0 ? 'active' : '');
      var MenuSelected = (index === 0 ? 'true' : '');
      TabMenu += '<li class="nav-item">';
      TabMenu += '<a class="nav-link '+MenuActive+'" id="pills-'+value.toLowerCase()+'-tab" data-toggle="pill" href="#pills-'+value.toLowerCase()+'" role="tab" aria-controls="pills-'+value.toLowerCase()+'" aria-selected="'+MenuSelected+'">';
      TabMenu += '<div class="tab-menu-icon '+value.toLowerCase()+'-icon"></div>';
      TabMenu += '<span>'+value+'</span>';
      TabMenu += '</a>';
      TabMenu += '</li>';
    });
    TabMenu += '</ul>';
    
    
    var linkSosmed = '<div id="links-sosmed">';
    $.each(LinksSosmed, function( index, value ) {
      linkSosmed += '<div class="link"><a href="'+value['links']+'">'+value['name']+'</a></div>';
    });
    linkSosmed += '</div>';
    
    
    var TabPane = '<div class="tab-content" id="pills-tabContent">';
    $.each(listItems, function( index, value ) {
      var PaneActive = (index === 'Slot' ? 'active show' : '');
      var PaneImageClass = (index === 'Slot' ? 'image-slot ' : '');
      var MenuName = (index === 'Casino' ? 'LIVE CASINO' : (index === 'Togel' ? 'TOGEL ONLINE' : 'SLOT GAMES'));
      TabPane += '<div class="tab-pane fade '+PaneActive+'" id="pills-'+index.toLowerCase()+'" role="tabpanel" aria-labelledby="pills-'+index.toLowerCase()+'-tab">';
      TabPane += '<div class="tab-pane-content">';
      TabPane += '<div class="tab-panel-right">';
      TabPane += '<div class="section-title"><div class="title-name"><div class="landing-icon '+index.toLowerCase()+'-icon"></div><h3>'+MenuName+'</h3></div></div>';
      TabPane += '<div class="row">';
      TabPane += '<div class="col-sm-12 col-12">';
      TabPane += '<div class="container no-padding">';
      TabPane += '<div class="tab-list" id="data-'+index.toLowerCase()+'">';
      if(index !== 'Togel'){
        $.each(value, function( indexx, valuee ) {
          TabPane += '<div class="tab-item-image"><img class="'+PaneImageClass+''+valuee['classes']+'" src="'+valuee['image']+'" alt="'+valuee['name']+'"><div class="tab-item-caption">'+valuee['name']+'</div></div>';
        });
      }
      TabPane += '</div>';
      TabPane += '</div>';
      TabPane += '</div>';
      TabPane += '</div>';
      TabPane += '</div>';
      TabPane += '</div>';
      TabPane += '</div>';
    });
    
    TabPane += '</div>';
    
    $('main div.inner-wrap').prepend(linkSosmed+''+TabMenu);
    $(TabPane).insertAfter("ul.tab-menu");
    
    $.ajax({
      type: 'GET', 
      url: 'json/fetch/index/data',
      dataType: 'json',
      success: function (data) {
        DataTogel = data;
        $.each(data['data']['last_result']['data'], function(index, element) {
          $.each(element, function(i, val) {
            if(val['date'].length > 0){
              var htmlTogel = '<div class="tab-item-image"><div class="tab-item-caption togel">'+val['name']+'</div><div class="tab-item-number">'+val['number']+'</div><div class="tab-item-caption">'+val['date']+'</div></div>';
              $('div#data-togel').append(htmlTogel);
            }
          });
        });
      }
    });

    var bankstatus = '<div id="addons-properties-footer">';
    bankstatus += '<div id="payment-information-footer">';
    bankstatus += '<div class="container">';
    bankstatus += '<div class="row">';
    bankstatus += '<div class="col-12 col-sm-12 payment-logo">';
    bankstatus += '<div style="clear: both;height: 10px;"></div>';
    bankstatus += '<div class="payment-partners-new">';

    $('div.bank').each(function(i,v){
      var onlinefile = $(this).find('img:eq(0)').attr('src').split('/').pop().split('#')[0].split('?')[0];
      var bankName = $(this).find('img:eq(1)').attr('src').split('/').pop().split('#')[0].split('?')[0];
      onlinefile = onlinefile.replace(/\.gif/, '');
      var statusBank = (onlinefile == 'red-dot' ? 'dot-offline' : (onlinefile == 'yellow-dot' ? 'dot-trouble' : 'dot-online'));
      bankName = bankName.replace(/\.webp/, '');
      
      bankstatus += '<div class="box-bank">';
      bankstatus += '<div class="bank-status-dot '+statusBank+' blink"></div>';
      bankstatus += '<img src="'+$(this).find('img:eq(1)').attr('src')+'" alt="Bank '+bankName.toUpperCase()+'">';
      bankstatus += '</div>';
    });

    bankstatus += '</div>';
    bankstatus += '<div class="w-100 d-none d-md-block"></div>';
    bankstatus += '</div>';
    bankstatus += '</div>';
    bankstatus += '</div>';
    bankstatus += '</div>';
    bankstatus += '</div>';
    
    var LicensiLogo = '<center>';
    LicensiLogo += '<div class="supportby-section">';
    LicensiLogo += '<div class="supportby-section__list-title">License :</div>';
    LicensiLogo += '<div class="supportby-section__list-flex">';
    LicensiLogo += '<img src="/assets/img/wlb2c/icons/global/png/bmm.png" alt=""><img src="/assets/img/wlb2c/icons/global/png/pagcor.png" alt="">';
    LicensiLogo += '</div>';
    LicensiLogo += '</div>';
    LicensiLogo += '</center>';
    
    $('div#content').append('<div id="footer">'+bankstatus+''+LicensiLogo+'</div>');
    
    //$('div#footer').append(bankstatus);